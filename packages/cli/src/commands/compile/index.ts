/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-06 18:13:53
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-12 09:59:58
 */
import esbuild from 'esbuild'
import fg from 'fast-glob'
import path from 'path'
import { dtsPlugin } from 'esbuild-plugin-d.ts'
import { reporterPlugin } from './plugins/reporter'
import fs from 'fs-extra'

export interface ActionBuilderOptions {
  input?: string
  output?: string
  mode?: string
  notType?: boolean
  meta?: boolean
}
const FILES_COPY_LOCAL = ['package.json', 'README.md', 'LICENSE']

const buildMetaFiles = async (outdir: string) => {
  await fs.ensureDir(outdir)
  for (const file of FILES_COPY_LOCAL) {
    const filePath = path.join(process.cwd(), file)
    if (!fs.existsSync(filePath)) continue
    await fs.copy(filePath, path.join(outdir, file))
  }
}

export const actionBuilder = async (options: ActionBuilderOptions = {}) => {
  const { input = 'src', mode = 'development', output = 'dist', notType = false, meta = false } = options

  meta && buildMetaFiles(path.join(process.cwd(), output))

  await esbuild.build({
    entryPoints: await fg(path.join(input, './**/*.ts').replace(/\\/g, '/')),
    outdir: path.join(process.cwd(), output),
    bundle: false,
    format: 'cjs',
    platform: 'node',
    splitting: false,
    watch: mode === 'development',
    minify: false,
    sourcemap: false,
    color: true,
    loader: {
      '.ts': 'tsx',
      '.tsx': 'tsx'
    },
    plugins: [!notType && dtsPlugin(), reporterPlugin(mode)].filter(Boolean)
  })
}
