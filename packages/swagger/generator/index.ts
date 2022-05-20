/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-29 11:04:24
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-10 11:39:46
 */

import { format } from 'prettier'
import { SwaggerBuildConfig, SwaggerOutput, SwaggerAstConfig } from '../_types'
import { getNameSpaceType, TS_TYPE_NAME_SPACE, unshiftDeDupDefinition, varName, capitalizeCamelCase } from '../internal'
import { camelCase } from 'lodash'
import { spliceHeaderCode, spliceType, spliceTypeField } from './utils'

export interface SwaggerGenerateConfig {
  build: SwaggerBuildConfig
  ast: SwaggerAstConfig
  output: SwaggerOutput
}

export const generate = (config: SwaggerGenerateConfig) => {
  const { build, ast, output } = config

  // #region 从配置中读取描述信息和导入信息, 写入文件头, 初始化 code
  const headerCode = spliceHeaderCode(config)

  let apiFileCode = `
  ${headerCode}
  import http from '${build.import?.http || 'axios'}'
  import { AxiosRequestConfig } from 'axios'
  import * as ${TS_TYPE_NAME_SPACE} from '${build.import?.type || output.type.import}'

  `
  if (build.baseURL) {
    apiFileCode += `const baseURL = ${build.baseURL}\n`
  }
  let typeFileCode = `
  ${headerCode}
  /** @响应infer数据取值 */
  export type Response<T> = ${build.responseType || 'T'}
  `
  // #endregion

  // 先处理 function 请求函数的。请求函数会动态增加 definitions
  // 处理函数参数, 函数参数分为 地址栏参数, post body 参数, get params 参数 统一进行聚类处理
  // axios 参数转换 path. body. config. 发起请求前转换数据，响应后转换数据，数据转换基于 axios 默认的数据类型转化之后
  for (const api of ast.apis) {
    // #region 参数映射组装
    const apiArgumentsMap = {
      // params 参数: /xxx/{name}/eee
      params: '',
      // query  参数: /xxx/rrr?name=xxx
      query: '',
      // body   参数: axios({ data: { xxx } })
      body: '',
      // config 参数: axios({ ...config })
      config: 'config?: AxiosRequestConfig'
    }
    if (api.request.path.length > 0) {
      const definition = unshiftDeDupDefinition(ast.definitions, {
        name: varName(capitalizeCamelCase(api.request.path.map((v) => v.name).join('/') + '/path')),
        description: api.description,
        value: api.request.path
      })
      apiArgumentsMap.query = `query: ${getNameSpaceType(definition.name)}`
    }
    if (api.request.query.length > 0) {
      const { name } = unshiftDeDupDefinition(ast.definitions, {
        name: varName(capitalizeCamelCase(`${api.path}/query`)),
        description: api.description,
        value: api.request.query
      })
      apiArgumentsMap.params = `params: ${getNameSpaceType(name)}`
    }
    if (api.request.body) {
      apiArgumentsMap.body = `data: ${getNameSpaceType(api.request.body)}`
    }
    const apiConfigArgumentsMap = {
      baseURL: build.baseURL ? 'baseURL' : '',
      url: 'url',
      method: `method: '${api.method.toLocaleUpperCase()}'`,
      params: apiArgumentsMap.params ? 'params' : '',
      data: apiArgumentsMap.body ? 'data' : '',
      config: '...config'
    }
    // #endregion

    // #region 参数组合成代码, 添加一项 Api
    const url = api.path.replace(/\${/g, '${query.')
    const apiName = camelCase(`${api.method}/${api.path}`)
    const response = getNameSpaceType('Response') + `<${getNameSpaceType(api.response, 'void')}>`

    const apiFunctionArguments = Object.values(apiArgumentsMap).filter(Boolean)
    const apiConfigArguments = Object.values(apiConfigArgumentsMap).filter(Boolean)

    apiFileCode += `
    /**
     * @name ${api.description}
     * @method ${api.method.toLocaleUpperCase()}
     */
    export function ${apiName}(${apiFunctionArguments}) {
      type ResponseType = ${response}
      const url = \`${url}\`
      return http.request<ResponseType>({ ${apiConfigArguments} })
    }
    `
    // #endregion
  }

  // codec types 生成特定规范和格式的 interface 类型
  for (const definition of ast.definitions) {
    const contents = definition.value.map((field) => {
      if (build.paramsPartial) field.required = false
      return spliceTypeField(field)
    })
    typeFileCode += spliceType(definition, contents)
  }

  apiFileCode = format(apiFileCode, { printWidth: 800, parser: 'typescript' })

  typeFileCode = format(typeFileCode, { printWidth: 800, parser: 'typescript' })

  return { apiFileCode, typeFileCode }
}
