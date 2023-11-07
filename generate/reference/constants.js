import path from 'path'

export const cwd = process.cwd()
export const vendorPath = path.join(cwd, 'generate', 'vendor')

export const referencePath = path.join(cwd, 'docs', 'reference')
export const loopTypesPath = path.join(referencePath, 'loop-types')
