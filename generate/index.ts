import { ensureGitRepos } from './lib/ensureGitRepos.js'
import { exportAllPro } from './lib/pro'
import { exportAllLoopTypes } from './lib/export'
import exportTemplateSystemDocs from './lib/exportTemplateSystemDocs'

// Generate API docs
const main = async () => {
  const args = process.argv.slice(2)
  const update = args.includes('update')

  /**
   * Ensure Git repos are installed in vendor folder
   * Run with `npm run gen update` to git pull them all
   */
  await ensureGitRepos(
    [
      'template-system',
      'template-system-pro',
      // 'tangible-fields-module',
      // 'tangible-fields-pro-module',
      // 'tangible-loops-and-logic',
      // 'tangible-blocks',
      // 'tangible-blocks-pro',
    ],
    update
  )

  const exportTypes = {

    /**
     * npm run gen loops
     * 
     * All loop types' query parameters and fields
     * 
     * @see /generate/loop-types
     * @see /docs/dynamic-tags/loop
     * @see /common/QueryArgs.jsx, Fields.jsx
     */
    'loops': exportAllLoopTypes,

    /**
     * npm run gen pro
     * 
     * All Pro integrations' loop types
     * 
     * @see /generate/loop-types-pro
     * @see /docs/pro
     */
    pro: exportAllPro,

    /**
     * npm run gen system
     * 
     * Template System modules
     * 
     * @see /docs/develop/template-system
     */
    'system': exportTemplateSystemDocs,

    /**
     * npm run gen all
     * 
     * All the above
     */
    all: async function () {
      for (const [key, fn] of Object.entries(exportTypes)) {
        if (key !== 'all') {
          await fn()
        }
      }
    },
  }

  let didSomething = false

  for (const [key, fn] of Object.entries(exportTypes)) {
    if (args.includes(key)) {
      await fn()
      didSomething = true
    }
  }

  if (!didSomething) {
    console.log(`Usage: npm run gen [mode]

Specify one or more modes: ${Object.keys(exportTypes).join(' ')}
`)
  }
}

main()
  .catch(console.error)
  .finally(() => process.exit())
