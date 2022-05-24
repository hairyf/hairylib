import path from 'path'
import { SwaggerBuildConfig, SwaggerOutput } from '../_types'

export const parseOutput = (config: SwaggerBuildConfig) => {
  const basePath = config.output?.cwd || process.cwd()
  const api = config.output?.api || 'src/api/index.ts'
  const type = config.output?.type || 'src/api/index.type.ts'

  let typeImport = path.relative(path.dirname(api), type).replace(/\.ts$/, '')
  typeImport = typeImport.startsWith('.') ? typeImport : './' + typeImport

  const output: SwaggerOutput = {
    api: {
      root: path.join(basePath, path.dirname(api)),
      import: api.replace(/\.ts$/, ''),
      file: path.join(basePath, api)
    },
    type: {
      root: path.join(basePath, path.dirname(type)),
      import: typeImport.replace(/\.ts$/, ''),
      file: path.join(basePath, type)
    }
  }
  return output
}
