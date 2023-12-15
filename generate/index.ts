import { ensureGitRepos } from './lib/ensureGitRepos.js'
import { exportAllPro } from './lib/pro'
import { exportAll } from './lib/export'

// Generate API docs
const main = async () => {

  // Ensure Git repos are installed in vendor folder
  await ensureGitRepos([
    'template-system',
    'template-system-pro',
    // 'tangible-blocks',
    'tangible-fields-module',
  ])

  // await exportAll()
  await exportAllPro()
}

main()
  .catch(console.error)
  .finally(() => process.exit())
