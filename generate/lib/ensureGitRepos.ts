import path from 'path'
import fs from 'fs/promises'

import { cwd, vendorPath } from './constants.js'
import { fileExists } from './fileExists.js'
import { run } from './run.js'

export const ensureGitRepo = async (repo) => {

  const gitPath = path.join(vendorPath, repo)

  if (!(await fileExists(gitPath))) {
    await run(
      `git clone ${
        repo === 'template-system' ? 'https://github.com/' : 'git@bitbucket.org:'
      }tangibleinc/${repo}`,
      {
        cwd: vendorPath,
      }
    )
  }
  return {
    gitPath,
  }
}

export const ensureGitRepos = async (repos, update = false) => {

  if (!(await fileExists(vendorPath))) {
    console.log('Create vendor folder')
    await fs.mkdir(vendorPath)
  }

  /**
   * Git clone plugin
   */

  for (const repo of repos) {

    console.log('Ensure Git repo', repo)

    const { gitPath } = await ensureGitRepo(repo)

    if (!(await fileExists(gitPath))) {
      console.log('Something went wrong - Git repo not found')
      return
    }

    if (update) {
      console.log('git pull', repo)
      await run(`git pull`, {
        cwd: gitPath,
      })
    }
  }

  console.log()
}
