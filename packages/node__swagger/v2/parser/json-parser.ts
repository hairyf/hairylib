import { ParserRequestOptions, ParserTypingsOptions, CommonFiled, LiteralExpressionFiled } from "../typings";
import { OpenAPISourceV2Json } from "../typings/OpenAPI-Specification";
import { traverseParameters, TraverseParametersOptions, varName, useRefMap } from './helper/util'
import * as OpenAPITypes from "../typings/OpenAPI-Specification";
import camelCase from 'lodash/camelCase'
import isArray from 'lodash/isArray'
import isEmpty from 'lodash/isEmpty'
import forIn from 'lodash/forIn'
import { markBlockTypeAliasAliasDeclaration, astNodeToCode } from '../compiler/helper/ts-util'
import axios from 'axios'
import { createTSRequestDeclaration } from '../compiler/ts-request'
import fs from 'fs-extra'

interface JSONParserOptions {
  baseURL?: ParserRequestOptions['baseURL']
  httpConfig?: ParserRequestOptions['httpConfig']
  httpImport?: ParserRequestOptions['httpImport']
  typeImport?: ParserRequestOptions['typeImport']
}
interface JSONParserReturn {
  request: ParserRequestOptions
  typings: ParserTypingsOptions
}

class JSONParser {
  $source: OpenAPISourceV2Json
  $options: JSONParserOptions
  $parser: JSONParserReturn
  constructor(data: OpenAPISourceV2Json, options?: JSONParserOptions) {
    this.$source = data
    this.$options = options || {}
    this.$parser = this.init()
    this.transformPaths()
    this.transformDefinitions()
  }
  public parser() {
    return this.$parser
  }
  private init() {
    const data = this.$source
    const options = this.$options
    const jsonDocs: ParserRequestOptions['jsonDocs'] = [
      {
        type: 'docs', comment: [
          `@swagger ${data.swagger}`,
          `@description ${data.info.description}`,
          `@version ${data.info.version}`,
          `@title ${data.info.title}`
        ]
      }
    ]
    const functions: ParserRequestOptions['functions'] = []
    const interfaces: ParserTypingsOptions['typings'] = []
    const request: ParserRequestOptions = {
      jsonDocs,
      baseURL: options.baseURL,
      httpConfig: options.httpConfig,
      typeImport: options.typeImport,
      httpImport: {
        name: options.httpImport?.name ?? 'http',
        value: options.httpImport?.value ?? 'axios'
      },
      functions: functions,
    }
    const typings: ParserTypingsOptions = {
      jsonDocs,
      typings: interfaces,
    }
    return { request, typings }
  }
  private transformPaths() {
    traverseParameters(this.$source.paths, (config) => {
      const { method, path, options } = config
      const functionContent = this.collector(config)
      const functionItem: ParserRequestOptions['functions'][number] = {
        name: camelCase(`${method}/${path}`),
        method,
        url: `\`${path.replace(/({)/g, '${paths.')}\``,
        jsonDocs: [
          options.summary && `@summary ${options.summary}`,
          options.description && `@description ${options.description}`,
          `@method ${method}`
        ].filter(Boolean),
        options: functionContent.options,
        parameters: functionContent.parameters,
        responseType: options.responses['200'] ? this.helperResponse(this.helperUnit(options.responses['200'])) : 'void',
        meta: options
      }
      this.$parser.request.functions.push(functionItem)
    })
  }
  private transformDefinitions() {
    forIn(this.$source.definitions, (definition, name) => {
      const { properties, required } = definition
      forIn(properties, (propertie, pname) => {
        if (typeof propertie.required === 'undefined')
          propertie.required = !!required?.some?.(item => item === pname)
      })
      this.$parser.typings.typings.push({
        name: varName(name),
        properties: Object
          .keys(properties)
          .map((key) => {
            const item = properties[key]
            return {
              name: key,
              type: this.helperUnit(item),
              description: item.description,
              required: item.required
            }
          })
      })
    })
  }
  private collector(config: TraverseParametersOptions) {
    const { options, path, method } = config
    const { typings } = this.$parser
    config.parameters = config.parameters.filter(item => {
      return !options.parameters.some(v => v.name === item.name)
    })
    const parameters = [...config.parameters, ...options.parameters]
    const params = {
      header: [] as CommonFiled[],
      path: [] as CommonFiled[],
      query: [] as CommonFiled[],
      formData: [] as CommonFiled[],
      body: [] as CommonFiled[],
    }

    const data = {
      options: [] as LiteralExpressionFiled[],
      parameters: [] as CommonFiled[]
    }
    const increase = (options: any, filed: CommonFiled) => {
      if (options.options.includes(filed.name)) return
      if (filed.name === 'body') filed.name = 'data'
      if (filed.name === 'query') filed.name = 'params'
      if (filed.name === 'path') filed.name = 'paths'
      if (filed.name === 'header') filed.name = 'headers'
      if (filed.name !== 'paths') options.options.push(filed.name)
      options.parameters.push(filed)
    }

    for (const parameter of parameters) {
      const target = params[parameter.in]
      target.push(this.helperParameter(parameter))
    }
    forIn(params, (filed, type) => {
      if (!filed.length) return
      const name = varName([method, path, type])
      if (typings.typings.some(item => item.name === name)) return
      typings.typings.push({ name, properties: filed })
      if (type === 'header')
        filed.push({ name: '[key: string]', required: true, type: 'any' })
      if (type === 'formData') { // TODO
        increase(data, {
          name: 'data',
          type: 'FormData',
          required: true
        })
      } else {
        increase(data, {
          name: type,
          type: name,
          required: filed.some(item => {
            const isAny = item.name.startsWith('[') && item.type.endsWith('any')
            return item.required && !isAny
          })
        })
      }
    })
    return data
  }
  private helperParameter(parameter: OpenAPITypes.Parameter): CommonFiled {
    const filed = {
      name: parameter.name,
      type: '',
      required: parameter.required,
      description: parameter.description ?? ''
    }
    if (parameter.in === 'formData')
      filed.type = this.helperUnit(parameter)
    if (parameter.in === 'body')
      filed.type = this.helperUnit(parameter)
    if (parameter.in === 'header')
      filed.type = this.helperUnit(parameter)
    if (parameter.in === 'path')
      filed.type = this.helperUnit(parameter)
    if (parameter.in === 'query') {
      if (parameter.type !== 'array') {
        filed.type = this.helperUnit(parameter)
      } else {
        filed.type = 'string | string[]'
        filed.description += `?${parameter.name}=a,b,c | ?${parameter.name}=a&${parameter.name}=b`
      }
    }
    return filed
  }
  private helperUnit(propertie: OpenAPITypes.Schema): string {
    if (propertie.originalRef) {
      return varName(propertie.originalRef)
    }
    if (propertie['$ref']) {
      return varName(useRefMap(propertie['$ref']))
    }
    if (propertie['schema']) {
      return this.helperUnit(propertie['schema'])
    }
    if (propertie.additionalProperties) {
      return `Record<string, ${this.helperUnit(propertie.additionalProperties)}>`
    }
    if (!propertie.type) {
      return 'any'
    }
    if (propertie.type === 'object') {
      if (!propertie.properties || isEmpty(propertie.properties)) {
        return 'Record<string, any>'
      }
      const fields = Object.keys(propertie.properties).map((name) => {
        const item = propertie.properties![name]
        const type = this.helperUnit(item)
        return {
          name,
          type,
          required: !!item.required,
          description: item.description
        }
      })
      const nodes = markBlockTypeAliasAliasDeclaration(fields)
      const code = astNodeToCode(nodes)
      return code.replace(/ \?  : /g, '?: ')
    }
    if (propertie.type === 'array') {
      return `${this.helperUnit(propertie.items!)}[]`
    }
    if (propertie.type === 'boolean') {
      return propertie.type
    }
    if (propertie.type === 'string') {
      return propertie.type
    }
    if (isArray(propertie.type)) {
      return propertie.type.map((type) => this.helperUnit({ type })).join(' | ')
    }
    if (['integer', 'long', 'float', 'byte', 'TypesLong'].includes(propertie.type)) {
      return 'number'
    }
    if (['byte', 'binary', 'date', 'dateTime', 'password', 'TypesString'].includes(propertie.type)) {
      return 'string'
    }
    return 'any'
  }
  private helperResponse(name: string) {
    const NameSpace = this.$parser.request.typeImport?.name
    if (NameSpace)
      name = `${NameSpace}.Response<${name}>`
    else
      name = `Response<${name}>`
    return name
  }
}

async function run() {
  const { data } = await axios.get('https://petstore.swagger.io/v2/swagger.json')
  const { request, typings } = new JSONParser(data).parser()
  const code = astNodeToCode(createTSRequestDeclaration(request, typings))
  fs.writeFile('./test.ts', code)
}

run()
