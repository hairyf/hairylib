import path from 'path'
import type { Plugin } from 'vite'
import fs from 'fs-extra'
import md5 from 'md5'
import { replacer } from '../utils'

export function MarkdownTransform(): Plugin {
  return {
    name: 'hairy-md-transform',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.endsWith('.md')) return null

      const { footer } = await getFunctionMarkdown(id, code.length)

      if (footer) {
        code = replacer(code, footer, 'FOOTER', 'tail')
      }

      return code
    }
  }
}

export async function getFunctionMarkdown(mdPath: string, length: number) {
  const types = await getTypeDefinition(mdPath.replace('.md', '.ts'))
  let typingSection = ''

  if (types) {
    const code = `\`\`\`typescript\n${types.trim()}\n\`\`\``
    typingSection =
      types.length > 1000 && length > 500
        ? '\n' +
          '## Type Declarations\n' +
          '\n' +
          '<details>\n' +
          '<summary>Show Type Declarations</summary>\n' +
          '\n' +
          code +
          '\n' +
          '</details>\n'
        : '\n' + '## Type Declarations\n' + '\n' + code
  }

  const footer = `${typingSection}`

  return { footer }
}

export async function getTypeDefinition(tsPath: string): Promise<string | undefined> {
  const typeFilePath = path.join(process.cwd(), 'node_modules', '.cache/types', md5(tsPath))
  if (!fs.existsSync(typeFilePath)) return
  return fs.readFileSync(typeFilePath, 'utf-8')
}
