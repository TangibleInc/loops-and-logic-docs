import fs from 'fs/promises'
import { parsePhp } from './parsePhp'

export const parseFile = async (filePath) => {
  const content = await fs.readFile(filePath, 'utf8')
  return await parsePhp(content)
}
