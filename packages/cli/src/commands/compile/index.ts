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
import { externalizeDepsPlugin } from './plugins/externalize-deps'

export interface ActionBuilderOptions {
  input?: string
  output?: string
  mode?: 'production' | 'development'
  type?: boolean
  meta?: boolean
  logger?: boolean
}
const FILES_COPY_LOCAL = ['package.json', 'README.md', 'LICENSE']

const buildMetaFiles = async (outdir: string) => {
  await fs.ensureDir(outdir)
  for (const file of FILES_COPY_LOCAL) {
    const filePath = path.join(process.cwd(), file)
    if (!fs.existsSync(filePath)) continue
    await fs.copy(filePath, path.join(process.cwd(), outdir, file))
  }
}

export const actionBuilder = async (options: ActionBuilderOptions = {}) => {
  const { input = 'src', mode = 'development', output = 'dist', type = false, meta = false, logger = false } = options

  if (meta) buildMetaFiles(output)

  const isInputFile = input.endsWith('.js') || input.endsWith('.ts')

  const buildConfig: esbuild.BuildOptions = {
    bundle: false,
    format: 'cjs',
    platform: 'node',
    splitting: false,
    watch: mode === 'development',
    minify: false,
    sourcemap: false,
    color: true,
    loader: { '.ts': 'tsx', '.tsx': 'tsx' },
    plugins: [externalizeDepsPlugin(), type && dtsPlugin({ outDir: output }), logger && reporterPlugin(mode)].filter(Boolean)
  }

  if (isInputFile) {
    const basename = path.basename(input).replace(/\.ts|\.tsx/, '.js')
    const outfile = path.extname(output) ? output : path.join(output, basename)

    buildConfig.bundle = true
    buildConfig.entryPoints = [input]
    buildConfig.outfile = path.join(outfile)
  } else {
    buildConfig.entryPoints = await fg(path.join(input, './**/*.ts').replace(/\\/g, '/'))
    buildConfig.outdir = path.join(process.cwd(), output)
  }

  await esbuild.build(buildConfig)
}
