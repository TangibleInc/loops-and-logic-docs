import util from 'node:util'
import { exec as execSync } from 'node:child_process'

const exec = util.promisify(execSync)

export async function run(command, options) {
  console.log(command)
  const { stdout, stderr } = await exec(command, options)
  console.log(stdout)
  if (stderr) {
    console.log(stderr)
    return false
  }
  return true
}
