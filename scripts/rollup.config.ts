/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-06 18:13:53
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-24 14:01:13
 */
import type { OutputOptions, RollupOptions } from 'rollup'
import { rollup } from 'rollup'
import esbuild from 'rollup-plugin-esbuild'
import dts from 'rollup-plugin-dts'
import { terser } from 'rollup-plugin-terser'
import { camelCase, isArray } from 'lodash-es'

export const rollupBuildPackage = async (config: PackageManifest) => {
  const { name, external, iife, globals } = config
  const configs: RollupOptions[] = []
  const iifeGlobals = {
    'vue-demi': 'VueDemi',
    '@vueuse/core': 'VueUse',
    '@hairy/utils': 'hairyUtils',
    '@hairy/browser': 'hairyBrowser',
    '@vue/composition-api': 'compositionApi',
    'pubsub-js': 'pubsubJs',
    vue: 'Vue',
    dayjs: 'dayjs',
    'lodash-es': '_',
    lodash: '_',
    '@vue/shared': 'VueShared',
    delay: 'delay',
    ...(globals || {})
  }

  const iifeName = camelCase(`hairy_${name}`)

  const input = `packages/${name}/index.ts`
  const output: OutputOptions[] = [
    {
      file: `packages/${name}/dist/index.cjs.js`,
      format: 'cjs',
      exports: 'named'
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
        exports: 'named',
        extend: true,
        globals: iifeGlobals
      },
      {
        file: `packages/${name}/dist/index.iife.min.js`,
        format: 'iife',
        name: iifeName,
        exports: 'named',
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

  const baseExternals = ['vue-demi', 'lodash-es', '@hairy/utils']
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

  const bundles = configs.map(async (config) => {
    const bundle = await rollup({ ...config })
    const outputs = isArray(config.output) ? config.output! : [config.output!]
    await Promise.all(outputs.map(bundle.write))
    return bundle
  })

  return await Promise.all(bundles)
}
