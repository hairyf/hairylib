import { OutputOptions, RollupOptions } from 'rollup'
import esbuild from 'rollup-plugin-esbuild'
import dts from 'rollup-plugin-dts'
import { packages } from '../meta/packages'
import { terser } from 'rollup-plugin-terser'
import execa from 'execa'
import { resolve, join } from 'path'
import { readPackageLernaGitHash } from './utils'
import consola from 'consola'
const configs: RollupOptions[] = []

for (const { name, external, iife, globals, build, tsc, customBuild } of packages) {
  if (tsc === true) {
    execa.sync('tsc', { cwd: join('packages', name) })
    continue
  }
  if (customBuild === true) {
    execa.sync('yarn build', { cwd: join('packages', name) })
    continue
  }
  if (build === false) continue

  // 判断与打包后 hash 相同则跳过编译 (在公司环境无法使用 lerna 暂时跳过)
  const packageRoot = resolve(__dirname, '..', 'packages', name)
  const packageDist = resolve(packageRoot, 'dist')
  const packageHash = readPackageLernaGitHash(packageRoot)
  const distHash = readPackageLernaGitHash(packageDist)
  if (packageHash !== '' && packageHash === distHash) {
    consola.info('-- hash identical to close build --')
    continue
  }

  const iifeGlobals = {
    'vue-demi': 'VueDemi',
    '@vueuse/core': 'VueUse',
    '@hairy/core': 'TuiMaoCore',
    '@hairy/browser': 'TuiMaoBrowser',
    '@vue/composition-api': 'compositionApi',
    'pubsub-js': 'pubsubJs',
    vue: 'Vue',
    dayjs: 'dayjs',
    lodash: '_',
    ...(globals || {})
  }

  const iifeName = 'TuiMaoUtils'

  const input = `packages/${name}/index.ts`
  const output: OutputOptions[] = [
    {
      file: `packages/${name}/dist/index.cjs.js`,
      format: 'cjs'
    },
    {
      file: `packages/${name}/dist/index.esm.js`,
      format: 'es'
    }
  ]

  // 假如 iife 模式 不为 false 添加配置
  if (iife !== false) {
    output.push(
      {
        file: `packages/${name}/dist/index.iife.js`,
        format: 'iife',
        name: iifeName,
        extend: true,
        globals: iifeGlobals
      },
      {
        file: `packages/${name}/dist/index.iife.min.js`,
        format: 'iife',
        name: iifeName,
        extend: true,
        globals: iifeGlobals,
        plugins: [
          terser({
            format: { comments: false }
          })
        ]
      }
    )
  }
  const baseExternals = ['vue-demi', 'lodash', '@hairy/core']
  configs.push(
    {
      input,
      output,
      plugins: [esbuild()],
      external: [...baseExternals, ...(external || [])]
    },
    {
      input,
      output: {
        file: `packages/${name}/dist/index.d.ts`,
        format: 'es'
      },
      plugins: [dts()],
      external: [...baseExternals, ...(external || [])]
    }
  )
}
export default configs
