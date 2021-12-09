import esbuild from 'esbuild'
import fg from 'fast-glob'
import path from 'path'
import { dtsPlugin } from 'esbuild-plugin-d.ts'
import { reporterPlugin } from './plugins/reporter'

interface ActionBuilderOptions {
  input?: string
  output?: string
  mode?: string
}

export const actionBuilder = async (options: ActionBuilderOptions = {}) => {
  const { input = 'src', mode = 'development', output = 'dist' } = options
  const inputs = await fg(path.join(input, './**/*.ts').replace(/\\/g, '/'))
  await esbuild.build({
    entryPoints: inputs,
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
    plugins: [dtsPlugin() as any, reporterPlugin(mode)]
  })
}
