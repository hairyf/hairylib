import type { Plugin } from 'vite'
import fs from 'fs-extra'
import { rollup } from 'rollup'
import rollupPluginDts from 'rollup-plugin-dts'
import { format } from 'prettier'
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
  if (!fs.existsSync(tsPath)) return
  const bundles = await rollup({
    input: tsPath,
    plugins: [
      rollupPluginDts({
        compilerOptions: { preserveSymlinks: false }
      })
    ],
    onwarn: () => false
  })
  const { output } = await bundles.generate({ format: 'es' })
  let code = output[0].code.replace(/declare /g, '')
  code = code.replace(/export {};/, '')
  if (!/props/.test(tsPath))
    code = format(code, { printWidth: 90, parser: 'typescript', semi: false, singleQuote: true })
  return code
}
