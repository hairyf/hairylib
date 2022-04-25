import { AxiosRequestConfig } from 'axios'

/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-29 11:01:44
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-20 18:19:06
 */
export interface SwaggerBuildConfig {
  /** @description 当前 Swagger 服务器配置地址 http://dev-ebg.com/api/ebg-order-app/v2/api-docs */
  uri: string
  /** @description 当前接口基础地址, 一般可用于环境变量的定义 */
  baseURL?: string
  /** @description 输出路径配置, 暂时只支持 ts 路径 */
  output?: {
    /** @default 'src/api/index.ts' */
    api?: string
    /** @default 'src/api/index.type.ts' */
    type?: string
    /** Node.js 进程的当前工作目录。 */
    cwd?: string
  }
  /** @description 生成文件的导入类型 */
  import?: {
    /** @description 导入 axios 请求函数的别名地址 @default axios; */
    http?: string
    /** @description 导入 types 生成类型的别名地址 @default output.type; */
    type?: string
  }
  /**
   * @description 响应体的类型转换
   * @default T >>> type Response<T> = T >>> http.get<Response<Data>>('xxx')
   * @template `T extends { data?: infer V } ? V : void`
   */
  responseType?: string
  /** 请求参数 */
  requestConfig?: AxiosRequestConfig
}
export interface SwaggerDefineConfig extends Omit<SwaggerBuildConfig, 'output' | 'uri'> {
  servers?: SwaggerBuildConfig[]
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

/** @Swagger抽象语法描述信息 */
export interface SwaggerAstConfig {
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
  type?: string | string[]
  items?: SwaggerSourceProperties
  originalRef?: string
  $ref?: string
  required?: boolean
  format?: string
  description?: string
  properties?: Record<string, SwaggerSourceProperties>
}
export interface SwaggerSourceParameter {
  name: string
  in: 'body' | 'header' | 'query' | 'path'
  type?: string
  description: string
  required: boolean
  schema: SwaggerSourceProperties
}
export interface SwaggerParserContext {
  definitions: SwaggerDefinition[]
}
