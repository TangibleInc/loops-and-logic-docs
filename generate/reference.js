const path = require('path')
const fs = require('fs/promises')
const util = require('node:util')
const { connect } = require('http2')
const exec = util.promisify(require('node:child_process').exec)

// Generate API docs

const cwd = process.cwd()

const scriptFolderPath = path.join(cwd, 'generate')
const tmpPath = path.join(cwd, 'generate', 'tmp')
const fileExists = async (filePath) => {
  try {
    await fs.access(filePath)
    return true
  } catch (e) {
    return false
  }
}

const run = async (command, options) => {
  console.log(command)
  const { stdout, stderr } = await exec(command, options)
  console.log(stdout)
  if (stderr) {
    console.log(stderr)
    return false
  }
  return true
}

const ensureGitRepo = async (repo) => {
  const gitPath = path.join(tmpPath, repo)
  if (!(await fileExists(gitPath))) {
    console.log('Git clone plugin:', repo)
    await run(`git clone git@bitbucket.org:tangibleinc/${repo}`, {
      cwd: tmpPath,
    })
  }
  return {
    gitPath,
  }
}

let php
async function parsePhp(content) {
  if (!php) {
    const { createPhp } = await import('@expreva/php-parser')
    php = await createPhp()
  }
  return await php.parse(content)
}

function walkNodes(nodes, callback) {
  for (const node of nodes) {
    callback(node, (childNodes) => walkNodes(childNodes, callback))
  }
}

function parseArrayItems(items) {
  if (items[0] && items[0].key === null) {
    const arr = []
    for (const item of items) {
      if (item.nodeType === 'ArrayItem') {
        if (!item.key) {
          arr.push(parseNodeValue(item.value))
        }
      }
    }
    return arr
  }

  const obj = {}
  for (const item of items) {
    if (item.nodeType === 'ArrayItem') {
      const key = parseNodeValue(item.key)
      const value = parseNodeValue(item.value)
      obj[key] = value
    }
  }
  return obj
}

function parseNodeValue(node) {
  if (!node) return
  switch (node.nodeType) {
    case 'Scalar_Int':
    // fall through
    case 'Scalar_String':
      return node.value
    case 'Expr_Array':
      return parseArrayItems(node.items)
    default:
      // console.log('Unknown node type', node.nodeType)
      break
  }
}

;(async () => {
  const args = process.argv.slice(2)

  // console.log(
  //   parseArrayItems((await parsePhp(`<?php [1];`)).parsed[0].expr.items)
  // )
  // process.exit()
  // return

  if (!(await fileExists(tmpPath))) {
    console.log('Create temporary folder')
    await fs.mkdir()
  }

  /**
   * Git clone plugin
   */

  for (const repo of [
    'template-system',
    // 'tangible-fields-module'
  ]) {
    const { gitPath } = await ensureGitRepo(repo)
    if (!(await fileExists(gitPath))) {
      console.log('Something went wrong - Git repo not found')
      return
    }
    if (args.includes('--update')) {
      await run(`git pull`, {
        cwd: gitPath,
      })
    }
  }

  /**
   * Parse PHP files and extract data for docs
   */

  console.log('Parse PHP and generate JSON')

  const templateSystemPath = path.join(tmpPath, 'template-system')

  // Loop types

  const parseFile = async (filePath) => {
    const content = await fs.readFile(filePath, 'utf8')
    return await parsePhp(content)
  }

  const state = {
    classes: {},
  }

  for (const loopType of [
    'attachment',
    'base',
    'calendar',
    // 'comment',
    // 'field',
    // 'list',
    // 'map',
    'menu',
    'post',
    'taxonomy',
    'taxonomy-term',
    'type',
    'user',
  ]) {
    const file = `loop/types/${loopType}/index.php`

    console.log('File:', file)

    const filePath = path.join(templateSystemPath, file)
    const { parsed, error } = await parseFile(filePath)
    if (error) {
      console.log('Parse error', error)
      continue
    }

    /**
     * Extract
     */

    walkNodes(parsed, (node, childWalk) => {
      switch (node.nodeType) {
        case 'Stmt_Namespace':
          state.namespace = node.name.name
          console.log('Namespace:', state.namespace)
          if (node.stmts) childWalk(node.stmts)
          break
        case 'Stmt_Class':
          {
            const className = node.name.name
            const extendsClass = node?.extends?.name
            console.log(
              'Class:',
              className,
              ...(extendsClass ? ['extends', extendsClass] : [])
            )
            // console.log(node)
            for (const childNode of node.stmts) {
              if (
                childNode.nodeType === 'Stmt_Property' &&
                childNode.props[0] &&
                childNode.props[0]?.name.name === 'config'
              ) {
                const { items = [] } = childNode.props[0].default

                const classConfig = parseArrayItems(items)

                if (classConfig.name) {
                  state.classes[className] = classConfig
                }
              } else {
                // Stmt_ClassMethod
              }
            }
          }
          break
        default:
          // console.log('Node:', node.nodeType)
          break
      }
    })

    // Export to JSON
    async function exportJson() {
      const loopTypesJsonPath = path.join(tmpPath, 'loop-types')

      if (!(await fileExists(loopTypesJsonPath))) {
        console.log('Create generate/tmp/loop-types')
        await fs.mkdir(loopTypesJsonPath)
      }

      for (const [key, value] of Object.entries(state.classes)) {
        const jsonFile = `${value.name}.json`
        await fs.writeFile(
          path.join(loopTypesJsonPath, jsonFile),
          JSON.stringify(value, null, 2)
        )

        console.log('Wrote', jsonFile)
      }
    }

    /**
     * Export to Markdown
     */
    async function exportMarkdown() {
      const referencePath = path.join(cwd, 'docs', 'reference')
      const loopTypesPath = path.join(referencePath, 'loop-types')

      if (!(await fileExists(referencePath))) {
        console.log('Create docs/reference')
        await fs.mkdir(referencePath)
      }
      if (!(await fileExists(loopTypesPath))) {
        console.log('Create docs/reference/loop-types')
        await fs.mkdir(loopTypesPath)
      }

      /**
       * Loop type class definitions
       */

      let indexContent = `# Loop types\n\n`

      for (const [key, value] of Object.entries(state.classes)) {
        const title = key === 'BaseLoop' ? 'Base' : value.title
        const { query_args: queryArgs, fields } = value
        const slug = value.name.replace(/_/g, '-')
        const markdownFile = `${slug}.md`
        const content = `---
id: ${slug}
title: ${title}
tags:
- Loop Type
---

# ${title}
${key === 'BaseLoop' ? '' : `\nLoop type: \`${value.name}\`\n`}
${
  !queryArgs
    ? ''
    : `## Query Parameters

${Object.keys(queryArgs).reduce((str, key) => {
  str += `### ${key}

${(queryArgs[key].description || '').replace(/<br\s*[\/]?>/gi, '<br/>')}${
    !queryArgs[key].type
      ? ''
      : `\n\n<small>Type: ${
          Array.isArray(queryArgs[key].type)
            ? queryArgs[key].type.join(', ')
            : queryArgs[key].type
        }</small>${!queryArgs[key].default ? '\n' : ''}`
  }${
    !queryArgs[key].default
      ? ''
      : `${queryArgs[key].type ? ' - ' : '\n\n'}<small>Default: ${
          queryArgs[key].default
        }</small>\n`
  }
`
  return str
}, '')}`
}
${
  !fields || !Object.keys(fields).length
    ? ''
    : `## Fields

${Object.keys(fields).reduce((str, key) => {
  str += `### ${key}

${(fields[key].description || '').replace(/<br\s*[\/]?>/gi, '<br/>')}

`
  return str
}, '')}`
}`

        await fs.writeFile(path.join(loopTypesPath, markdownFile), content)

        console.log('Wrote', markdownFile)

        indexContent += `- [${title}](/reference/loop-types/${slug})\n`
      } // Each loop type class

      await fs.writeFile(path.join(loopTypesPath, 'index.md'), indexContent)
      console.log('Wrote', 'index.md')

    } // Export Markdown



    // await exportJson()

    await exportMarkdown()
  }
})()
  .catch(console.error)
  .finally(() => process.exit())

/**
 * Gather Docblock comments and the function name, argruments, class proerties, methods
 */
async function gatherDocBlocks(parsed) {
  const comments = []

  walkNodes(parsed, (node, childWalk) => {
    if (!node?.attributes?.comments) return

    const [comment] = node?.attributes?.comments
    const {
      nodeType: commentType, // Comment or Comment_Doc
      text,
    } = comment

    if (commentType !== 'Comment_Doc') return

    // console.log('Node', inspect(node, {
    //   colors: true
    // }))

    switch (node.nodeType) {
      case 'Stmt_Function':
        if (node.name && node.name.nodeType === 'Identifier') {
          console.log('Function:', node.name.name)
          console.log(text)
        }
        break
      case 'Stmt_ClassMethod':
        if (node.name && node.name.nodeType === 'Identifier') {
          console.log('Class method:', node.name.name)
          console.log(text)
        }
        break
      case 'Stmt_Expression':
        if (node.expr && node.expr.nodeType === 'Expr_Assign') {
          // $var->method = function() {};

          if (
            node.expr.var &&
            node.expr.var.name &&
            node.expr.var.name.nodeType === 'Identifier'
          ) {
            console.log('Statement Function:', node.expr.var.name.name)
            console.log(text)
          } else {
            // console.log('Statement', node.expr.var)
            // console.log(node.expr.expr)
          }
        }
        break
      case 'Stmt_Nop': // No operation
      default:
        break
    }

    console.log()
  })
}
