import { OutputOptions, RollupOptions } from 'rollup'
import esbuild from 'rollup-plugin-esbuild'
import dts from 'rollup-plugin-dts'
import { packages } from '../meta/packages'
import { terser } from 'rollup-plugin-terser'
import { resolve } from 'path'
import { readPackageLernaGitHash } from './utils'
const configs: RollupOptions[] = []

for (const { name, external, iife, globals, build } of packages) {
  if (build === false) continue

  // 判断与打包后 hash 相同则跳过编译
  const packageRoot = resolve(__dirname, '..', 'packages', name)
  const packageDist = resolve(packageRoot, 'dist')
  const packageHash = readPackageLernaGitHash(packageDist)
  const distHash = readPackageLernaGitHash(packageDist)
  if (packageHash === distHash) continue

  const iifeGlobals = {
    'vue-demi': 'VueDemi',
    '@vueuse/core': 'VueUse',
    '@tuimao/core': 'TuiMaoCore',
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

  configs.push({
    input,
    output,
    plugins: [esbuild()],
    external: ['vue-demi', 'lodash', ...(external || [])]
  })

  configs.push({
    input,
    output: {
      file: `packages/${name}/dist/index.d.ts`,
      format: 'es'
    },
    plugins: [dts()],
    external: ['vue-demi', 'lodash', ...(external || [])]
  })
}
export default configs
