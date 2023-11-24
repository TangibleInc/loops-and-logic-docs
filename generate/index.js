import path from 'path'
import fs from 'fs/promises'

import { cwd, referencePath, vendorPath } from './lib/constants.js'
import { ensureGitRepos } from './lib/ensureGitRepos.js'
import { parsePhp, parseArrayItems, walkNodes } from './lib/parsePhp.js'
import { fileExists } from './lib/fileExists.js'

const parseFile = async (filePath) => {
  const content = await fs.readFile(filePath, 'utf8')
  return await parsePhp(content)
}

const defaultLoopTypesPath = path.join(cwd, 'generate', 'loop-types')

/**
 * Export loop type classes to JSON
 */
export async function exportLoopTypeClasses(
  classes,
  loopTypesPath = defaultLoopTypesPath
) {
  if (!(await fileExists(loopTypesPath))) {
    console.log('Create:', path.relative(cwd, loopTypesPath))
    await fs.mkdir(loopTypesPath)
  }

  const exportedFiles = []

  for (const [key, value] of Object.entries(classes)) {
    const slug = value.name.replace(/_/g, '-')

    const jsonFile = `${slug}.json`
    const jsonFilePath = path.join(loopTypesPath, jsonFile)

    await fs.writeFile(jsonFilePath, JSON.stringify(value, null, 2))

    console.log('Wrote', jsonFile)

    exportedFiles.push({
      file: jsonFile,
      data: value,
    })
  }

  return exportedFiles
}

/**
 * Extract loop type class and config
 */
function extract(node, childWalk, state) {
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

    case 'Stmt_Expression':
      if (
        node.expr &&
        node.expr.nodeType === 'Expr_Assign' &&
        node.expr.var &&
        node.expr.var.var &&
        node.expr.var.var.nodeType === 'Expr_StaticPropertyFetch' &&
        node.expr.var.var.name &&
        node.expr.var.var.name.name === 'config'
      ) {
        // AssignmentLoop::$config['query_args'] = [];

        const className = node.expr.var.var.class.name
        const propName = node.expr.var.dim.value

        if (node.expr.expr.nodeType === 'Expr_Array') {
          const items = parseArrayItems(node.expr.expr.items)
          // console.log(className, propName, items)
          if (state.classes[className]) {
            state.classes[className][propName] = Object.assign(
              state.classes[className][propName] || {},
              items
            )
          }
        } else if (
          node.expr.expr.nodeType === 'Expr_FuncCall' &&
          node.expr.expr.name &&
          node.expr.expr.name.name === 'array_merge' &&
          node.expr.expr.args[1] &&
          node.expr.expr.args[1].value &&
          node.expr.expr.args[1].value.nodeType === 'Expr_Array'
        ) {
          const items = parseArrayItems(node.expr.expr.args[1].value.items)
          // console.log(className, propName, items)
          if (state.classes[className]) {
            state.classes[className][propName] = Object.assign(
              state.classes[className][propName] || {},
              items
            )
          }
        } else {
          // console.log(node.expr, propName)
        }
      }
      break

    default:
      // console.log('Node:', node.nodeType)
      break
  }
}

function extractLoopTypeClasses(nodes) {
  const state = {
    classes: {},
  }
  walkNodes(nodes, extract, state)
  return state.classes
}

// Generate API docs
const main = async () => {
  /**
   * Ensure Git repos are installed in vendor folder
   */
  await ensureGitRepos([
    'template-system',
    'template-system-pro',
    // 'tangible-blocks',
    'tangible-fields-module',
  ])

  /**
   * Parse PHP files and extract data for docs
   */

  console.log('..Parse PHP and generate JSON')

  const templateSystemPath = path.join(vendorPath, 'template-system')

  // Loop types

  console.log()

  const classes = {}

  for (const loopTypeFile of [
    'attachment/index.php',
    'base/index.php',

    // Calendar loop type definitions: /template-system/loop/types
    'calendar/day.php',
    'calendar/month.php',
    'calendar/quarter.php',
    'calendar/week.php',
    'calendar/weekday.php',
    'calendar/year.php',

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

    Object.assign(classes, extractLoopTypeClasses(parsed))

    console.log()
  } // Each loop type file

  await exportLoopTypeClasses(classes)

  /**
   * Template System Pro
   */

  const templateSystemProPath = path.join(vendorPath, 'template-system-pro')

  // Loop types

  console.log()

  /**
   * Process Pro integration
   */
  async function processProIntegration({ name, title, loopTypeFiles }) {
    const classes = {}

    for (const loopTypeFile of loopTypeFiles) {
      const file = `integrations/${name}/types/${loopTypeFile}`

      console.log('File:', file)

      const filePath = path.join(templateSystemProPath, file)
      const { parsed, error } = await parseFile(filePath)
      if (error) {
        console.log('Parse error', error)
        continue
      }

      Object.assign(classes, extractLoopTypeClasses(parsed))
      // console.log(classes)

      console.log()
    }

    const loopTypesPath = path.join(cwd, 'generate', 'loop-types-pro', name)

    if (!(await fileExists(loopTypesPath))) {
      console.log('Create:', path.relative(cwd, loopTypesPath))
      await fs.mkdir(loopTypesPath, {
        recursive: true,
      })
    }

    const exportedFiles = await exportLoopTypeClasses(classes, loopTypesPath)
    console.log()

    /**
     * Generate Markdown page for every loop type class
     */
    const markdownFolder = path.join(cwd, 'docs', 'pro', name)
    if (!(await fileExists(markdownFolder))) {
      console.log('Create:', path.relative(cwd, markdownFolder))
      await fs.mkdir(markdownFolder, {
        recursive: true,
      })
    }

    const loopTypesList = []

    for (const { file, data } of exportedFiles) {
      const loopTypeName = data.name
      const parts = loopTypeName.split('_').slice(1)
      const slug = parts.join('-')
      const title = parts.map((n) => n[0].toUpperCase() + n.slice(1)).join(' ')

      loopTypesList.push({
        title,
        slug,
      })

      const markdownFile = path.join(markdownFolder, `${title}.md`)
      const template = `---
id: ${slug}
title: ${title}
tags:
  - pro
  - ${name}
---
import { QueryArgsList } from '@site/common/QueryArgs.jsx'
import { FieldsList } from '@site/common/Fields.jsx'
import json from '@site/generate/loop-types-pro/${name}/${file}'
const { query_args, fields } = json

For loop type \`${loopTypeName}\`, here are the query parameters and fields.

## Query parameters

<QueryArgsList args={query_args} />

## Fields

<FieldsList fields={fields} />
`
      await fs.writeFile(markdownFile, template, 'utf8')
      console.log('Wrote', path.relative(cwd, markdownFile))
    }

    /**
     * Index
     */

    const markdownFile = path.join(markdownFolder, `index.md`)
    await fs.writeFile(
      markdownFile,
      `---
id: ${name}
title: ${title}
tags:
- pro
- ${title}
url: /pro/${name}
---

# ${title}

Here are the loop types available for the ${title} integration.

${loopTypesList.map((type) => `- [${type.title}](/pro/${name})`).join('\n')}
`
    )
    console.log('Wrote', path.relative(cwd, markdownFile))
  }

  await processProIntegration({
    name: 'edd',
    title: 'EasyDigitalDownloads',
    loopTypeFiles: [
      'cart/index.php',
      'commission/loop/index.php',
      'customer/index.php',
      'discount/index.php',
      'download_log/index.php',
      'fields/activation/index.php',
      'fields/download_file/index.php',
      'fields/license_log/index.php',
      'fields/pricing/index.php',
      'license/index.php',
      'payment/index.php',
      'payment_method/index.php',
      'product/index.php',
      'product_review/index.php',
      'subscription/index.php',
      'tax_rate/index.php',
      'vendor/loop/index.php',
    ],
  })

  await processProIntegration({
    name: 'events-calendar',
    title: 'Events Calendar',
    loopTypeFiles: [
      'category/index.php',
      'event/index.php',
      'fields/attendee/index.php',
      'organizer/index.php',
      'ticket/index.php',
      'venue/index.php',
    ],
  })

  // Geolocation has no loop types - but adds a If tag condition
  // await processProIntegration({
  //   name: 'geolocation',
  //   title: 'Geolocation',
  //   loopTypeFiles: []
  // })

  await processProIntegration({
    name: 'gravity-forms',
    title: 'Gravity Forms',
    loopTypeFiles: [
      'entry/loop/index.php',
      'entry-field/loop/index.php',
      // TODO: Tags
    ],
  })

  await processProIntegration({
    name: 'learndash',
    title: 'Learndash',
    loopTypeFiles: [
      'assignment/loop/index.php',
      'certificate/loop/index.php',
      'course/loop/index.php',
      'essay/loop/index.php',
      'group/loop/index.php',
      'group-leader/loop/index.php',
      'group-user/loop/index.php',
      'lesson/loop/index.php',
      'question/loop/index.php',
      'quiz/loop/index.php',
      'student/loop/index.php',
      'topic/loop/index.php',
      'user/index.php',
      'user-activity/loop/index.php',
      'user-quiz-attempts/loop/index.php',
    ],
  })

  await processProIntegration({
    name: 'lifter',
    title: 'Lifter',
    loopTypeFiles: [
      'access-plan/loop/index.php',
      'achievement/loop/index.php',
      'assignment/loop/index.php',
      'certificate/loop/index.php',
      'coupon/loop/index.php',
      'course/loop/index.php',
      'group/loop/index.php',
      'instructor/loop/index.php',
      'lesson/loop/index.php',
      'membership/loop/index.php',
      'order/loop/index.php',
      'question/loop/index.php',
      'quiz/loop/index.php',
      'section/loop/index.php',
      'student/loop/index.php',
      'voucher/loop/index.php',
    ],
  })

  await processProIntegration({
    name: 'woocommerce',
    title: 'WooCommerce',
    loopTypeFiles: [
      'appointment/loop/index.php',
      'appointment_availability/loop/index.php',
      'appointment_staff/loop/index.php',
      'cart/loop/index.php',
      'coupon/loop/index.php',
      'fields/order_item/loop/index.php',
      'fields/team_member/loop/index.php',
      'membership/loop/index.php',
      'membership_team/loop/index.php',
      'order/loop/index.php',
      'payment_method/loop/index.php',
      'product/loop/index.php',
      'product_review/loop/index.php',
      'subscription/loop/index.php',
      'tax_class/loop/index.php',
      'tax_rate/loop/index.php',
      // 'template/loop/index.php',
      'user/index.php',
      'user_membership/loop/index.php',
    ],
  })
}

main()
  .catch(console.error)
  .finally(() => process.exit())

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
