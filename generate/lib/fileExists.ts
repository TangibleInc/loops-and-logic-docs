import fs from 'fs/promises'

export async function fileExists(filePath) {
  try {
    await fs.access(filePath)
    return true
  } catch (e) {
    return false
  }
}
