import { isArray, isEmpty } from 'lodash'
import { SwaggerDefinition, SwaggerField, SwaggerParserContext, SwaggerSourceProperties } from '../_types'
import { varName, TYPE_MAPPING, unshiftDeDupDefinition } from '../internal'
import { spliceTypeField } from '../generator/utils'
import { useContext } from '../internal/context'

export interface ParsePropertiesOptions {
  name?: string | string[]
  /** 如果 expands 开启，对象不直接添加 definitions，而是直接展开 */
  expands?: boolean
}

const useRefMap = (ref: string) => ref.split('/').pop()!
const splitName = (options: ParsePropertiesOptions) => {
  const names = Array.isArray(options.name) ? options.name : [options.name]
  return names.join('/').split('/').map(varName).join('').trim()
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
  const { parseProperties: _parseProperties } = useContext(this)

  if (propertie.originalRef) {
    return varName(propertie.originalRef)
  }

  if (propertie['$ref']) {
    return varName(useRefMap(propertie['$ref']))
  }

  if (propertie['schema']) {
    return _parseProperties(propertie['schema'], options)
  }

  if (propertie.additionalProperties) {
    return `Record<string, ${_parseProperties(propertie.additionalProperties, { expands: true })}>`
  }

  if (propertie.type === 'array') {
    return `${_parseProperties(propertie.items!, { expands: true })}[]`
  }

  if (propertie.type === 'object') {
    // 空的对象
    if (!propertie.properties || isEmpty(propertie.properties)) {
      return 'Record<string, any>'
    }

    // 列举属性
    const fields = Object.keys(propertie.properties).map((name) => {
      const propertieItem = propertie.properties![name]
      const item: SwaggerField = {
        name,
        value: _parseProperties(propertieItem, { expands: true }),
        required: !!propertieItem.required,
        description: propertieItem.description || ''
      }
      return item
    })

    if (options.expands) {
      return `{ ${fields.map(spliceTypeField).join(';')} }`
    }

    // 添加映射
    const name = splitName(options)
    unshiftDeDupDefinition(this.definitions, {
      name,
      description: '',
      value: fields
    })
    return name
  }

  if (isArray(propertie.type)) {
    return propertie.type.map((type) => _parseProperties({ type })).join(' | ')
  }

  if (propertie.type) return TYPE_MAPPING[propertie.type] || propertie.type

  return 'any'
}

parseProperties.definitions = [] as SwaggerDefinition[]
