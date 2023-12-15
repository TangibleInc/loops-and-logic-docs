import path from 'path'
import fs from 'fs/promises'
import { cwd, vendorPath } from './constants'
import { fileExists } from './fileExists'
import { extractLoopTypeClasses } from './extract'
import { exportLoopTypeClasses } from './export'
import { parseFile } from './parse'

const templateSystemProPath = path.join(vendorPath, 'template-system-pro')

export async function exportAllPro() {
  await processAllProIntegrations()
}

const proIntegrations = [
  {
    name: 'edd',
    title: 'Easy Digital Downloads',
    oldDocs: 'https://loop.tangible.one/extend/easy-digital-downloads/',
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
  },
  {
    name: 'events-calendar',
    title: 'Events Calendar',
    oldDocs: 'https://loop.tangible.one/extend/events-calendar/',
    loopTypeFiles: [
      'category/index.php',
      'event/index.php',
      'fields/attendee/index.php',
      'organizer/index.php',
      'ticket/index.php',
      'venue/index.php',
    ],
  },
  // Geolocation has no loop types - but adds a If tag condition
  // {
  //   name: 'geolocation',
  //   title: 'Geolocation',
  //   loopTypeFiles: []
  // },
  {
    name: 'gravity-forms',
    title: 'Gravity Forms',
    oldDocs: 'https://loop.tangible.one/extend/gravity-forms/',
    loopTypeFiles: [
      'entry/loop/index.php',
      'entry-field/loop/index.php',
      // TODO: Tags
    ],
  },
  {
    name: 'learndash',
    title: 'Learndash',
    oldDocs: 'https://loop.tangible.one/extend/learndash/',
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
  },
  {
    name: 'lifter',
    title: 'Lifter',
    oldDocs: 'https://loop.tangible.one/extend/lifter/',
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
  },
  {
    name: 'woocommerce',
    title: 'WooCommerce',
    oldDocs: 'https://loop.tangible.one/extend/woocommerce/',
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
  }
]

export async function processAllProIntegrations() {
  for (const config of proIntegrations) {
    await processProIntegration(config)
  }
}

/**
 * Process each Pro integration
 */
async function processProIntegration({
  name,
  title,
  oldDocs = false,
  loopTypeFiles
}) {
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

  console.log('Export extracted data to', path.relative(cwd, loopTypesPath))

  console.log()
  const exportedFiles = await exportLoopTypeClasses(classes, loopTypesPath)
  console.log()

  const integrationTargetSlug = name==='edd'
    ? 'easy-digital-downloads'
    : name

  /**
   * Generate Markdown page for every loop type class
   */
  const markdownFolder = path.join(cwd, 'docs', 'integrations', integrationTargetSlug)
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
  - Pro
  - ${title}
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
  } // Each loop type

  /**
   * Index
   */

  const markdownFile = path.join(markdownFolder, `index.md`)
  await fs.writeFile(
    markdownFile,
    `---
id: ${integrationTargetSlug}
title: ${title}
tags:
- Pro
- ${title}
url: /integrations/${integrationTargetSlug}
---

# ${title}

This is the Pro module for integrating with ${title}.${!oldDocs ? '' : `\n\n(Here's a link to the [old documentation site](${oldDocs}) until everything is moved.)\n`}

Here are the loop types available.

${loopTypesList.map((type) => `- [${type.title}](/integrations/${integrationTargetSlug}/${type.slug})`).join('\n')}
`
  )

  console.log('Wrote', path.relative(cwd, markdownFile))
  console.log()
}
