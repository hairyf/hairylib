import { cloneDeep, isArray, isEmpty } from 'lodash'
import { SwaggerDefinition, SwaggerField, SwaggerParserContext, SwaggerSourceProperties } from '../_types'
import { varName, TYPE_MAPPING, unshiftDeDupDefinition } from '../internal'

export interface ParsePropertiesOptions {
  name?: string
  method?: string
  path?: string
  type?: string[]
}

const useRefMap = (ref: string) => ref.split('/').pop()!
const splitName = (options: ParsePropertiesOptions) => {
  return [
    // 截取字符串路径后三位, 避免长度太长
    varName(options.path?.split('/').slice(-3).join('/') || ''),
    varName(options.method || ''),
    varName(options.name || ''),
    // 截取字符串路径后三位, 避免长度太长
    options.type?.map((name) => varName(name)).join('') || ''
  ]
    .join('')
    .trim()
}

/**
 * 根据 Definitions 不同的类型进行解析 为 通用的类型结构
 * @param propertie
 */
export function parseProperties(
  this: SwaggerParserContext,
  propertie: SwaggerSourceProperties,
  options: ParsePropertiesOptions = {}
): string {
  const _parseProperties = parseProperties.bind(this)

  if (propertie.originalRef) {
    return varName(propertie.originalRef)
  }

  if (propertie['$ref']) {
    return varName(useRefMap(propertie['$ref']))
  }

  if (propertie.additionalProperties) {
    return `Record<string, ${_parseProperties(propertie.additionalProperties)}>`
  }

  if (propertie.type === 'array') {
    const newOptions = { ...options }
    return `${_parseProperties(propertie.items!, newOptions)}[]`
  }

  if (propertie.type === 'object') {
    // 空的对象
    if (!propertie.properties || isEmpty(propertie.properties)) {
      return 'Record<string, any>'
    }
    // 列举属性
    const fields = Object.keys(propertie.properties).map((name) => {
      const propertieItem = propertie.properties![name]
      const newOptions = cloneDeep(options)
      newOptions.type?.push(name)
      const item: SwaggerField = {
        name,
        value: _parseProperties(propertieItem, newOptions),
        required: !!propertieItem.required,
        description: propertieItem.description || ''
      }
      return item
    })

    // 添加映射
    const name = splitName(options)
    unshiftDeDupDefinition(this.definitions, {
      name,
      description: '',
      value: fields
    })
    return name
  }

  // TODO: types
  if (isArray(propertie.type)) {
    return propertie.type.join(' | ')
  }

  if (propertie.type) return TYPE_MAPPING[propertie.type] || propertie.type

  return 'any'
}

parseProperties.definitions = [] as SwaggerDefinition[]
