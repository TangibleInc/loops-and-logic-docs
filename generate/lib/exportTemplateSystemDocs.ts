import path from 'node:path'
import fs from 'node:fs/promises'
import { globby } from 'globby'
import { cwd, vendorPath } from './constants'

/**
 * npm run gen template-system
 */
export default async function exportTemplateSystemDocs() {
  const docsReferencePath = path.join(cwd, 'docs', 'reference')
  const templateSystemPath = path.join(vendorPath, 'template-system')

  async function getAllDocs() {
    const docs = await globby(
      // Must limit levels because some modules have internal docs
      // `**/{index,readme}.md`
      ['readme.md', '*/readme.md', '*/*/readme.md'],
      {
        cwd: templateSystemPath,
        caseSensitiveMatch: false,
        ignore: [
          '**/node_modules/**',
          '.git',
          '.phpunit.cache',
          '**/tests/**',
          '**/vendor/**',
        ],
      }
    )

    docs.sort()
    return docs
  }

  const docs = await getAllDocs()
  // console.log(docs)

  const topLevelFolders = [
    // 'language',
    // 'modules',
    // 'integrations',
    // 'admin',
    // 'content',
    // 'editor',
    // 'elandel',
    // 'form',
    // 'loop',
    // 'logic',
    // 'framework',
    // 'views',
  ]

  const excludeDirs = [
    'editor',
    'tools/git-subrepo',
    'content/site-structure',
    // 'integrations',
    'loop'
  ]

  for (const file of docs) {
    const sourceFilePath = path.join(templateSystemPath, file)

    let targetFile = file.replace('readme.md', 'index.md')

    const parts = targetFile.split('/')
    const fullDir = parts.slice(0, -1).join('/')
    const dir = parts.shift() || ''

    if (
      excludeDirs.indexOf(fullDir) >= 0 ||
      fullDir.startsWith('integrations') ||
      fullDir.startsWith('modules')
    ) {
      // Skip
      continue
    }

    // Name the folders by priority

    let docsPath = path.join(docsReferencePath, '01 - template-system')

    const pos = topLevelFolders.indexOf(dir)
    if (dir === 'framework') {
      /**
       * Framework section is at root menu, because it's meant to be used by
       * other plugins also.
       */

      targetFile = parts.join('/')
      docsPath = path.join(docsReferencePath, '02 - framework')
    } else if (pos >= 0) {
      const priority = pos + 1

      const targetDir = `${priority <= 9 ? '0' : ''}${priority} - ${dir}`

      targetFile = `${targetDir}/` + parts.join('/')
    }

    const targetFilePath = path.join(docsPath, targetFile)
    const targetDirPath = path.dirname(targetFilePath)

    console.log(path.relative(cwd, targetFilePath))

    await fs.mkdir(targetDirPath, { recursive: true })

    await fs.copyFile(sourceFilePath, targetFilePath)
  }

  console.log()
  // TODO: Watch mode - Watch files and rebuild on changes
}
