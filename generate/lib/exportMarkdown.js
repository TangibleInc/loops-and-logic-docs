import path from 'path'
import fs from 'fs/promises'

import { loopTypesPath, referencePath } from './constants.js'
import { fileExists } from './fileExists.js'

/**
 * Export to Markdown
 */
export async function exportMarkdown(state) {
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
    const { title, query_args: queryArgs, fields } = value
    const slug = value.name.replace(/_/g, '-')
    const markdownFile = `${slug}.md`
    const content = `---
id: ${slug}
title: ${title}
tags:
- Loop Type
---

# ${title}
${key === 'BaseLoop' ? '' : `\nLoop type: \`${value.name}\` - Class: \n`}
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
