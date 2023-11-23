import path from 'path'
import fs from 'fs/promises'

import { cwd, referencePath, vendorPath } from './lib/constants.js'
import { ensureGitRepos } from './lib/ensureGitRepos.js'
import { exportJson } from './lib/exportJson.js'
import { parsePhp, parseArrayItems, walkNodes } from './lib/parsePhp.js'

// Generate API docs
;(async () => {


  /**
   * Install Git repos in vendor as needed
   */
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

  console.log()
  for (const loopTypeFile of [
    'attachment/index.php',
    'base/index.php',

    // TODO: Calendar loop type definitions: /template-system/loop/types
    // 'calendar/day.php',
    // 'calendar/month.php',
    // 'calendar/quarter.php',
    // 'calendar/week.php',
    // 'calendar/weekday.php',
    // 'calendar/year.php',

    // 'comment',
    // 'field',
    // 'list',
    // 'map',
    'menu/index.php',
    'post/index.php',
    'taxonomy/index.php',
    'taxonomy-term/index.php',
    'type/index.php',
    'user/index.php',
  ]) {

    const file = `loop/types/${loopTypeFile}`

    console.log('File:', file)

    const filePath = path.join(templateSystemPath, file)
    const { parsed, error } = await parseFile(filePath)
    if (error) {
      console.log('Parse error', error)
      continue
    }

    walkNodes(parsed, extract)
    console.log()
  } // Each loop type file

  /**
   * TODO: Generate an index of all loop types
   */
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
