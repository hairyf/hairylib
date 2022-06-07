import { resolve } from 'path'
import fg, { Options } from 'fast-glob'
import { format } from 'prettier'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

export const DIR_SRC = resolve(__dirname, '../packages')

export const listFunctionMds = async (dir: string, options?: Options) => {
  const files = await fg(['**/**.md'], {
    onlyFiles: true,
    cwd: dir,
    ignore: ['_*', 'dist', 'node_modules', 'CHANGELOG.md', '**/node_modules/**'],
    ...options
  })
  files.sort()
  return files
}

export const formatTypescript = async (code: string) => {
  return format(code, { printWidth: 90, parser: 'typescript', semi: false, singleQuote: true })
}
