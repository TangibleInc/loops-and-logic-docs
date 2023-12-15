import path from 'path'
import fs from 'fs/promises'

import { cwd, vendorPath } from './constants.js'
import { extractLoopTypeClasses } from './extract.js'
import { parseFile } from './parse'
import { fileExists } from './fileExists'

const defaultLoopTypesPath = path.join(cwd, 'generate', 'loop-types')
const templateSystemPath = path.join(vendorPath, 'template-system')

export async function exportAll() {

  await exportAllLoopTypes()
}

export async function exportAllLoopTypes() {

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

  console.log('Export extracted data to', path.relative(cwd, defaultLoopTypesPath))

  console.log()
  await exportLoopTypeClasses(classes)
  console.log()
}

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
