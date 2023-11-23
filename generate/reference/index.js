import path from 'path'
import fs from 'fs/promises'

import { cwd, referencePath, vendorPath } from './constants.js'
import { ensureGitRepos } from './ensureGitRepos.js'
import { exportJson } from './exportJson.js'
import { parsePhp, parseArrayItems, walkNodes } from './parsePhp.js'

// Generate API docs
;(async () => {

  // console.log( parseArrayItems((await parsePhp(`<?php [1];`)).parsed[0].expr.items) ); process.exit()

  await ensureGitRepos([
    'template-system',
    'template-system-pro',
    // 'tangible-blocks',
    'tangible-fields-module'
  ])

  /**
   * Parse PHP files and extract data for docs
   */

  console.log('..Parse PHP and generate JSON')

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
