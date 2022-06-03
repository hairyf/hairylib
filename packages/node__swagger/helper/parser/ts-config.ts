import { OpenAPIBuildConfiguration, OpenAPIBuildConfigurationRead } from '../typings/generator'
import merge from 'lodash/merge'
import cloneDeep from 'lodash/merge'
import { defaultConfig } from '../../config'
import { BuildOutput } from '../typings/output'
import path from 'path'

export const parserTsConfig = (config: OpenAPIBuildConfiguration): OpenAPIBuildConfigurationRead => {
  config = merge(cloneDeep(defaultConfig), config)
  const outputs = helperOutput(config)
  const options: OpenAPIBuildConfigurationRead = {
    baseURL: { value: config.baseURL || '' },
    httpConfig: {
      name: 'Config',
      parameter: 'config',
      type: `import('axios').AxiosRequestConfig`
    },
    typeImport: {
      name: 'OpenAPITypes',
      value: outputs.find(i => i.type === 'typings')?.import || ''
    },
    httpImport: {
      name: 'http',
      value: 'axios'
    },
    outputs,
    config
  }
  return options
}

const helperOutput = (config: OpenAPIBuildConfiguration): BuildOutput[] => {
  const output = (function () {
    if (typeof config.output === 'string')
      return { api: config.output, cwd: '', type: '' }
    else {
      return config.output
    }
  })()

  const basePath = output?.cwd || process.cwd()
  const api = output?.api || 'src/api/index.ts'
  let type = ''
  if (output?.type === true || typeof output?.type === 'undefined')
    type = api.replace(/\.ts|\.js/g, '.type.ts')
  if (typeof output?.type === 'string')
    type = output?.type

  const outputs: BuildOutput[] = []

  outputs.push({
    type: 'request',
    root: path.join(basePath, path.dirname(api)),
    import: api.replace(/\.ts$/, ''),
    path: path.join(basePath, api)
  })

  if (type) {
    let typeImport = path.relative(path.dirname(api), type).replace(/\.ts$/, '')
    typeImport = typeImport.startsWith('.') ? typeImport : './' + typeImport
    outputs.push({
      type: 'typings',
      root: path.join(basePath, path.dirname(type)),
      import: typeImport.replace(/\.ts$/, ''),
      path: path.join(basePath, type)
    })
  }


  return outputs
}
