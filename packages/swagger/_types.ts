import { cwd } from 'process'

/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-29 11:01:44
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2021-12-30 13:44:48
 */
cwd
export interface SwaggerBuildConfig {
  /** @description 当前 Swagger 服务器配置地址 http://dev-ebg.com/api/ebg-order-app/v2/api-docs */
  uri: string
  /** @description 当前接口地址域名对应的环境变量名称 'env config >> API_HOST_ADMIN */
  env: string
  /** @description {src/api/${name}.api.ts | src/types/${name}.api.type.ts} */
  // name: string
  /** @description 导入 axios 请求函数的别名地址 @default axios; */
  httpLib?: string
  /** @description 输出路径配置, 暂时只支持 ts 路径 */
  output?: {
    /** @default 'src/api/index.ts' */
    api?: string
    /** @default 'src/api/index.type.ts' */
    type?: string
    /** Node.js 进程的当前工作目录。 */
    cwd?: string
  }
}

export interface SwaggerOutputOption {
  root: string
  file: string
  import: string
}
export interface SwaggerOutput {
  api: SwaggerOutputOption
  type: SwaggerOutputOption
}

export interface SwaggerField {
  name: string
  value: string
  required: boolean
  description: string
}

export interface SwaggerDefinition {
  name: string
  description: string
  value: SwaggerField[]
}

/** @Swagger转换Api */
export interface SwaggerApi {
  path: string
  method: string
  description: string
  tags: string[]
  request: {
    header: SwaggerField[]
    path: SwaggerField[]
    body: null | string
    query: SwaggerField[]
  }
  response: null | string
}

/** @Swagger转换配置 */
export interface SwaggerParseConfig {
  info: {
    swaggerVersion: string
    apiVersion: string
    title: string
    description: string
    basePath: string
  }
  apis: SwaggerApi[]
  definitions: SwaggerDefinition[]
}

export interface SwaggerSourceProperties {
  type?: string
  items?: SwaggerSourceProperties
  originalRef?: string
  $ref?: string
  required?: boolean
}
export interface SwaggerSourceParameter {
  name: string
  in: 'body' | 'header' | 'query' | 'path'
  type: string
  description: string
  required: boolean
  schema: SwaggerSourceProperties
}
