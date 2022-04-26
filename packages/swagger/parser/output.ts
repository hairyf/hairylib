/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-30 10:41:34
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-06 14:49:22
 */
import path from 'path'
import { SwaggerBuildConfig, SwaggerOutput } from '../_types'

export const parseOutput = (config: SwaggerBuildConfig) => {
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
      import: path.relative(path.dirname(api), type).replace(/\.ts$/, ''),
      file: path.join(basePath, type)
    }
  }
  return output
}
