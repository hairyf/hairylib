/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-29 11:03:59
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2021-12-30 13:45:57
 */

import axios from 'axios'
import { entries } from 'lodash'
import { varName } from '../utils'
import {
  SwaggerApi,
  SwaggerBuildConfig,
  SwaggerDefinition,
  SwaggerField,
  SwaggerSourceParameter,
  SwaggerParseConfig
} from '../_types'
import { parseParameter } from './parameter'
import { parseProperties } from './properties'

export const parseSource = async (config: SwaggerBuildConfig) => {
  const { data } = await axios(config.uri, { method: 'get', responseType: 'json' })

  // #region 构造 swagger 相关描述性信息
  const transformConfig: SwaggerParseConfig = {
    info: {
      swaggerVersion: data.swagger,
      apiVersion: data.info.version,
      title: data.info.title,
      description: data.info.description,
      basePath: data.basePath
    },
    apis: [],
    definitions: []
  }
  // #endregion

  // definitions 是 swagger 里面单独对 interface 进行描述的一个集合
  // #region 统一对 definitions 进行处理，整理为前端需要的 interface 进行使用
  for (const [nameSource, definitionSource] of entries<any>(data.definitions)) {
    const definition: SwaggerDefinition = {
      name: varName(nameSource),
      description: definitionSource.description ?? '',
      value: []
    }
    for (const [fieldName, propertie] of entries<any>(definitionSource)) {
      const field: SwaggerField = {
        name: fieldName,
        value: parseProperties(propertie),
        required: !!propertie.required,
        description: propertie.description ?? ''
      }
      definition.value.push(field)
    }
    transformConfig.definitions.push(definition)
  }
  // #endregion

  // paths 集合 为 swagger 对 后端接口信息描述的统一 集合
  // 根据 paths 的描述信息进行 发起接口请求的函数 逻辑处理和代码生成
  // #region 对 原始的 结构 树 进行解析为统一的 json 数组的结构。便于代码生成的使用
  for (const [path, api] of entries<any>(data.paths)) {
    // api 代表这个路径对于什么的方法请求(api.get, api.post)
    for (const [method, config] of entries<any>(api)) {
      const fetchApi: SwaggerApi = {
        path: path.replace(/({)/g, '${'),
        method,
        tags: config.tags ?? [],
        description: config.summary ?? '',
        request: {
          header: [],
          path: [],
          body: null,
          query: []
        },
        response: null
      }
      const parameters: SwaggerSourceParameter[] = config?.parameters || []
      for (const parameter of parameters) {
        if (Array.isArray(fetchApi.request[parameter.in])) {
          const target = fetchApi.request[parameter.in] as any
          target.push(parseParameter(parameter))
        } else {
          fetchApi.request[parameter.in] = parseParameter(parameter) as any
        }
      }
      // 响应的数据。默认去 200 的 HTTP状态码对应的数据
      const responsesSchema = config.responses['200'].schema
      fetchApi.response = responsesSchema ? parseProperties(responsesSchema) : null
      transformConfig.apis.push(fetchApi)
    }
  }
  // #endregion
}
