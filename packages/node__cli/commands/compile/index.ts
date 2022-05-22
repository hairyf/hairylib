/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-06 18:13:53
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-12 09:59:58
 */
import esbuild from 'esbuild'
import { reporterPlugin } from './plugins/reporter'
import { externalizePlugin } from './plugins/externalize'
import { buildMetaFiles } from './utils'
import config from './config'
import { buildDir, buildEsllpkg, buildFile } from './build'

export const actionBuilder = async (_options = config) => {
  const params = resolveConfig(_options)
  const { input, options } = params

  if (!(input.endsWith('.js') || input.endsWith('.ts'))) {
    return await buildDir(params)
  }

  if (!options.esllpkg || options.pkgMode.length <= 0) {
    return await buildFile(params)
  }

  await buildEsllpkg(params)
}

function resolveConfig(_options = config) {
  if (_options.esllpkg && !_options.input) _options.input = 'index.ts'
  const { input, output, mode, ...options } = { ...config, ..._options }

  if (typeof options.pkgMode === 'string') {
    options.pkgMode = (options.pkgMode as any).split('/')
  }
  if (options.meta) buildMetaFiles(output)

  const plugins = [externalizePlugin(), options.logger && reporterPlugin(mode)]

  const buildConfig: esbuild.BuildOptions = {
    bundle: false,
    format: 'cjs',
    platform: 'node',
    globalName: options.globalName,
    splitting: false,
    watch: mode === 'development',
    minify: false,
    sourcemap: false,
    color: true,
    loader: { '.ts': 'tsx', '.tsx': 'tsx' },
    plugins: plugins.filter(Boolean)
  }
  return { buildConfig, input, output, mode, options }
}
