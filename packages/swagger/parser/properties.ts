/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-28 14:05:02
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2021-12-30 13:46:57
 */

import { SwaggerSourceProperties } from '../_types'
import { varName } from '../utils'
import { TYPE_MAPPING } from '../internal'

/**
 * 根据 Definitions 不同的类型进行解析 为 通用的类型结构
 * TODO 为无法复现的 swagger 结构场景。
 * @param propertie
 */
export function parseProperties(propertie: SwaggerSourceProperties): string {
  if (propertie.originalRef) {
    return varName(propertie.originalRef)
  }
  if (propertie['$ref']) {
    return varName(propertie['$ref'].split('/').pop()!)
  }

  if (propertie.type === 'array') {
    return `${parseProperties(propertie.items!)}[]`
  }

  if (propertie.type === 'object') {
    return 'Record<string, any>'
  }

  if (propertie.type) return TYPE_MAPPING[propertie.type] || propertie.type

  return 'any'
}
