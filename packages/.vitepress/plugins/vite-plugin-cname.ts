import { Plugin, ResolvedConfig } from 'vite'
import path from 'path'
import fs from 'fs-extra'

/**
 * 在 vite 打包时，将 package.json 中的 cname 写入 dist
 * 从而兼容 action 打包自动切换
 */
const vitePluginCname = () => {
  let resolvedConfig: ResolvedConfig
  const plugin: Plugin = {
    name: 'vite-plugin-cname',
    configResolved: (config) => {
      resolvedConfig = config
    },
    buildEnd() {
      const packageJson = fs.readJsonSync(path.join(process.cwd(), 'package.json'))
      const file = path.join(resolvedConfig.build.outDir, 'CNAME')
      fs.writeFileSync(file, packageJson?.cname || '')
    }
  }
  return plugin
}

export default vitePluginCname