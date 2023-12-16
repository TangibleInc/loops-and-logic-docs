import path from 'path'
import fs from 'fs/promises'

import { cwd } from './constants'
import { fileExists } from './fileExists'

/**
 * Export to JSON
 */
export async function exportJson(state) {

  const loopTypesJsonPath = path.join(cwd, 'generate', 'loop-types')

  if (!(await fileExists(loopTypesJsonPath))) {
    console.log('Create:', path.relative(cwd, loopTypesJsonPath))
    await fs.mkdir(loopTypesJsonPath)
  }

  for (const [key, value] of Object.entries(state.classes)) {
    const slug = value.name.replace(/_/g, '-')

    const jsonFile = `${slug}.json`

    await fs.writeFile(
      path.join(loopTypesJsonPath, jsonFile),
      JSON.stringify(value, null, 2)
    )

    console.log('Wrote', jsonFile)
  }
}
