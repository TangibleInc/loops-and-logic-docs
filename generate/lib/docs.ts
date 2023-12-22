import path from 'node:path'
import fs from 'node:fs/promises'
import { globby } from 'globby'
import { cwd, vendorPath } from './constants'

export async function generarteDocs() {

  const targetDirPath = path.join(cwd, 'docs', 'reference', '30 - documentation')

  await fs.mkdir(targetDirPath, { recursive: true })

  let dest = path.join(targetDirPath, 'index.md')

  await fs.copyFile(
    path.join(cwd, 'readme.md'),
    dest
  )
  console.log('Wrote', path.relative(cwd, dest))

  dest = path.join(targetDirPath, '10 - generate.md')
  await fs.copyFile(
    path.join(cwd, 'generate', 'readme.md'),
    dest
  )
  console.log('Wrote', path.relative(cwd, dest))

}