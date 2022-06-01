import { generate } from '../generator'

describe('@hairy/swagger:generate(TypescriptAxios)', () => {
  const apiHeaderCode =
    '/* eslint-disable */\n' +
    '\n' +
    '/**\n' +
    ' * @swagger 0.0.0\n' +
    ' * @description *\n' +
    ' * @version 0.0.0\n' +
    ' * @title test\n' +
    ' * @basePath *\n' +
    ' * @see xxx/api-docs\n' +
    ' * @author hairy\n' +
    ' * @throws 🈲 > 禁止手动修改\n' +
    ' */\n' +
    '\n' +
    'import http from "axios";\n' +
    'import { AxiosRequestConfig } from "axios";\n' +
    'import * as SwaggerType from "./index.type";\n'
  const typeHeaderCode =
    '/* eslint-disable */\n' +
    '\n' +
    '/**\n' +
    ' * @swagger 0.0.0\n' +
    ' * @description *\n' +
    ' * @version 0.0.0\n' +
    ' * @title test\n' +
    ' * @basePath *\n' +
    ' * @see xxx/api-docs\n' +
    ' * @author hairy\n' +
    ' * @throws 🈲 > 禁止手动修改\n' +
    ' */\n' +
    '\n' +
    '/** @响应infer数据取值 */\n' +
    'export type Response<T> = T;\n'

  test('basic', () => {
    const { apiFileCode, typeFileCode } = generate({
      build: { uri: 'xxx/api-docs' },
      output: {
        api: { root: '', file: '', import: 'src/api/index' },
        type: { root: '', file: '', import: './index.type' }
      },
      ast: {
        info: {
          apiVersion: '0.0.0',
          basePath: '*',
          description: '*',
          swaggerVersion: '0.0.0',
          title: 'test'
        },
        apis: [],
        definitions: []
      }
    })

    expect(apiFileCode).toEqual(apiHeaderCode)
    expect(typeFileCode).toEqual(typeHeaderCode)
  })

  test('basic function', () => {
    const { apiFileCode } = generate({
      build: { uri: 'xxx/api-docs' },
      output: {
        api: { root: '', file: '', import: 'src/api/index' },
        type: { root: '', file: '', import: './index.type' }
      },
      ast: {
        info: {
          apiVersion: '0.0.0',
          basePath: '*',
          description: '*',
          swaggerVersion: '0.0.0',
          title: 'test'
        },
        apis: [
          {
            path: '/xxx/search',
            description: 'basic function',
            method: 'get',
            request: {
              body: null,
              fromData: [],
              header: [],
              path: [],
              query: []
            },
            response: null,
            tags: []
          }
        ],
        definitions: []
      }
    })

    expect(apiFileCode).toEqual(
      apiHeaderCode +
        '\n' +
        '/**\n' +
        ' * @name basic function\n' +
        ' * @method GET\n' +
        ' */\n' +
        'export function getXxxSearch(config?: AxiosRequestConfig) {\n' +
        '  type ResponseType = SwaggerType.Response<void>;\n' +
        '  const url = `/xxx/search`;\n' +
        '  return http.request<ResponseType>({ url, method: "GET", ...config });\n' +
        '}\n'
    )
  })

  test('basic type function', () => {
    const { apiFileCode, typeFileCode } = generate({
      build: { uri: 'xxx/api-docs' },
      output: {
        api: { root: '', file: '', import: 'src/api/index' },
        type: { root: '', file: '', import: './index.type' }
      },
      ast: {
        info: {
          apiVersion: '0.0.0',
          basePath: '*',
          description: '*',
          swaggerVersion: '0.0.0',
          title: 'test'
        },
        apis: [
          {
            path: '/xxx/${a}/search',
            description: 'basic function',
            method: 'get',
            request: {
              body: 'SearchData',
              header: [],
              fromData: [],
              path: [
                {
                  name: 'a',
                  description: 'basic path field: a',
                  required: true,
                  value: 'string'
                }
              ],
              query: [
                {
                  name: 'a',
                  description: '',
                  required: false,
                  value: 'string'
                },
                {
                  name: 'b',
                  description: '',
                  required: false,
                  value: 'SearchParams'
                }
              ]
            },
            response: null,
            tags: []
          }
        ],
        definitions: [
          {
            name: 'SearchParams',
            description: 'basic type',
            value: [
              { name: 'a', description: 'basic field: a', required: true, value: 'string' },
              { name: 'b', description: 'basic field: b', required: false, value: 'number' }
            ]
          },
          {
            name: 'SearchData',
            description: 'basic type',
            value: [
              { name: 'a', description: 'basic field: a', required: true, value: 'string' },
              { name: 'b', description: 'basic field: b', required: false, value: 'number' }
            ]
          }
        ]
      }
    })

    expect(apiFileCode).toEqual(
      apiHeaderCode +
        '\n' +
        '/**\n' +
        ' * @name basic function\n' +
        ' * @method GET\n' +
        ' */\n' +
        'export function getXxxASearch(query: SwaggerType.XxxASearchPath, params: SwaggerType.XxxASearchParams, data: SwaggerType.SearchData, config?: AxiosRequestConfig) {\n' +
        '  type ResponseType = SwaggerType.Response<void>;\n' +
        '  const url = `/xxx/${query.a}/search`;\n' +
        '  return http.request<ResponseType>({ url, method: "GET", params, data, ...config });\n' +
        '}\n'
    )
    expect(typeFileCode).toEqual(
      typeHeaderCode +
        '/** @basic function */\n' +
        'export type XxxASearchParams = {\n' +
        '  a?: string;\n' +
        '  b?: SearchParams;\n' +
        '};\n' +
        '/** @basic function */\n' +
        'export type XxxASearchPath = {\n' +
        '  /** @basic path field: a */\n' +
        '  a: string;\n' +
        '};\n' +
        '/** @basic type */\n' +
        'export type SearchParams = {\n' +
        '  /** @basic field: a */\n' +
        '  a: string;\n' +
        '  /** @basic field: b */\n' +
        '  b?: number;\n' +
        '};\n' +
        '/** @basic type */\n' +
        'export type SearchData = {\n' +
        '  /** @basic field: a */\n' +
        '  a: string;\n' +
        '  /** @basic field: b */\n' +
        '  b?: number;\n' +
        '};\n'
    )
  })
})
