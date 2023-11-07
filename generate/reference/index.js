import path from 'path'
import fs from 'fs/promises'

import { cwd, loopTypesPath, referencePath, vendorPath } from './constants.js'
import { ensureGitRepos } from './ensureGitRepos.js'
import { exportJson } from './exportJson.js'
import { parsePhp, parseArrayItems, walkNodes } from './parsePhp.js'

// Generate API docs
;(async () => {
  // console.log(
  //   parseArrayItems((await parsePhp(`<?php [1];`)).parsed[0].expr.items)
  // )
  // process.exit()
  // return

  await ensureGitRepos()

  /**
   * Parse PHP files and extract data for docs
   */

  console.log('Parse PHP and generate JSON')

  const templateSystemPath = path.join(vendorPath, 'template-system')

  // Loop types

  const parseFile = async (filePath) => {
    const content = await fs.readFile(filePath, 'utf8')
    return await parsePhp(content)
  }

  const state = {
    namespace: '',
    classes: {},
  }

  /**
   * Extract loop type class and config
   */
  function extract(node, childWalk) {
    switch (node.nodeType) {
      case 'Stmt_Namespace':
        state.namespace = node.name.name
        console.log('  Namespace:', state.namespace)
        if (node.stmts) childWalk(node.stmts)
        break
      case 'Stmt_Class':
        {
          const className = node.name.name
          const extendsClass = node?.extends?.name
          console.log(
            '  Class',
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

              const config = parseArrayItems(items)

              config.namespace = state.namespace
              config.className = className
              config.extends = extendsClass

              // Loop type name
              if (config.name) {
                if (!config.title) {
                  config.title =
                    config.name[0].toUpperCase() +
                    config.name.slice(1).replace(/_/g, ' ')
                }
                state.classes[className] = config
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

    walkNodes(parsed, extract)
  } // Each loop type file

  async function exportReferenceIndex() {
    const referenceIndexPath = path.join(referencePath, 'index.md')
    const indexContent = `# Reference
  
  ## [Loop types](/reference/loop-types)
  
  `
    await fs.writeFile(referenceIndexPath, indexContent)

    console.log('Wrote', path.relative(cwd, referenceIndexPath))
  }

  /**
   * Launch
   */

  await exportJson(state)
  // await exportMarkdown(state)
  // await exportReferenceIndex()
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
