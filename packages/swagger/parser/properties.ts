/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-28 14:05:02
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-20 18:21:24
 */

import { SwaggerDefinition, SwaggerField, SwaggerParserContext, SwaggerSourceProperties } from '../_types'
import { varName, TYPE_MAPPING, unshiftDeDupDefinition } from '../internal'
import { cloneDeep, isArray, isEmpty } from 'lodash-es'

export interface ParsePropertiesOptions {
  name?: string
  method?: string
  path?: string
  type?: string[]
}

/**
 * 根据 Definitions 不同的类型进行解析 为 通用的类型结构
 * TODO 为无法复现的 swagger 结构场景。
 * @param propertie
 */
export function parseProperties(this: SwaggerParserContext, propertie: SwaggerSourceProperties, options: ParsePropertiesOptions = {}): string {
  const _parseProperties = parseProperties.bind(this)

  if (propertie.originalRef) {
    return varName(propertie.originalRef)
  }
  if (propertie['$ref']) {
    return varName(propertie['$ref'].split('/').pop()!)
  }

  if (propertie.type === 'array') {
    const newOptions = { ...options }
    return `${_parseProperties(propertie.items!, newOptions)}[]`
  }

  if (propertie.type === 'object') {
    const name = [
      // 截取字符串路径后三位, 避免长度太长
      varName(options.path?.split('/').slice(-3).join('/') || ''),
      varName(options.method || ''),
      varName(options.name || ''),
      // 截取字符串路径后三位, 避免长度太长
      options.type?.map((name) => varName(name)).join('') || ''
    ]
      .join('')
      .trim()
    if (!propertie.properties || isEmpty(propertie.properties)) {
      return 'Record<string, any>'
    }
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
    unshiftDeDupDefinition(this.definitions, {
      name,
      description: '',
      value: fields
    })
    return name
  }
  if (isArray(propertie.type)) {
    return propertie.type.join(' | ')
  }

  if (propertie.type) return TYPE_MAPPING[propertie.type] || propertie.type

  return 'any'
}

parseProperties.definitions = [] as SwaggerDefinition[]
