import path from 'path'
import fs from 'fs/promises'

import { vendorPath } from './constants.js'
import { fileExists } from './fileExists.js'
import { run } from './run.js'

export const ensureGitRepo = async (repo) => {
  const gitPath = path.join(vendorPath, repo)
  if (!(await fileExists(gitPath))) {
    console.log('Git clone plugin:', repo)
    await run(`git clone git@bitbucket.org:tangibleinc/${repo}`, {
      cwd: vendorPath,
    })
  }
  return {
    gitPath,
  }
}

export const ensureGitRepos = async (repos) => {
  const args = process.argv.slice(2)
  if (!(await fileExists(vendorPath))) {
    console.log('Create temporary folder')
    await fs.mkdir()
  }

  /**
   * Git clone plugin
   */

  for (const repo of repos) {
    const { gitPath } = await ensureGitRepo(repo)
    if (!(await fileExists(gitPath))) {
      console.log('Something went wrong - Git repo not found')
      return
    }

    if (args.includes('update')) {
      console.log('git pull', repo)
      await run(`git pull`, {
        cwd: gitPath,
      })
    }
  }
}
