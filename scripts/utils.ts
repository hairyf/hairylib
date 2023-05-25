import { resolve } from 'node:path'
import type { Options } from 'fast-glob'
import fg from 'fast-glob'
import { format } from 'prettier'

export const dirSrc = resolve(__dirname, '../packages')

export async function listFunctionMds(dir: string, options?: Options) {
  const files = await fg(['**/**.md'], {
    onlyFiles: true,
    cwd: dir,
    ignore: ['_*', 'dist', 'node_modules', 'CHANGELOG.md', '**/node_modules/**'],
    ...options,
  })
  files.sort()
  return files
}

export async function formatTypescript(code: string) {
  return format(code, { printWidth: 90, parser: 'typescript', semi: false, singleQuote: true })
}
