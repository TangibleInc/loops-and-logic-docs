
/**
 * TODO: Generate an overview of all loop types, tags, attributes, if conditions
 */
async function exportReferenceIndex() {
  const referenceIndexPath = path.join(referencePath, 'index.md')
  const indexContent = `# Reference
  
  ## [Loop types](/reference/loop-types)
  
  `
  await fs.writeFile(referenceIndexPath, indexContent)

  console.log('Wrote', path.relative(cwd, referenceIndexPath))
}
