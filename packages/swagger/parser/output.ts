/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-30 10:41:34
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2021-12-30 11:13:42
 */
import path from 'path'
import { SwaggerBuildConfig, SwaggerOutput } from '../_types'

export const transformOutput = (config: SwaggerBuildConfig) => {
  const basePath = config.output?.cwd || process.cwd()
  const api = config.output?.api || 'src/api/index.ts'
  const type = config.output?.type || 'src/api/index.type.ts'
  const output: SwaggerOutput = {
    api: {
      root: path.join(basePath, path.dirname(api)),
      import: api.replace(/\.ts$/, ''),
      file: path.join(basePath, api)
    },
    type: {
      root: path.join(basePath, path.dirname(type)),
      import: api.replace(/\.ts$/, ''),
      file: path.join(basePath, type)
    }
  }
  return output
}
