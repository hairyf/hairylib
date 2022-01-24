/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-console */
/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-29 11:03:27
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-12 17:22:08
 */

import { PlainObject, capitalizeCamelCase } from '@hairy/utils'
import { transliterate } from 'transliteration'
import { SwaggerDefinition } from '../_types'

/** swagger 类型 typescript 映射 */
export const TYPE_MAPPING: PlainObject = {
  integer: 'number',
  TypesLong: 'number',
  TypesString: 'string',
  object: 'Record<string, any>'
}

/** api 导入 ts 类型集合的 命名空间名字 */
export const TS_TYPE_NAME_SPACE = 'SwaggerType'

/**
 * 过滤非英文字符
 * @param {*} str
 * @param {*} seat
 */
export function uselessString(string_: string) {
  return string_.replace(/[^\dA-Za-z]+/g, '')
}

/**
 * 获取可用变量名
 * @param {*} str
 */
export function varName(string_: string) {
  if (!string_) {
    // console.trace('\n\nvarName inner is not defined\n')
    return string_
  }
  // 过一遍中文转拼音，没有中文转化之后无变化
  string_ = transliterate(string_).replace(/\s+/g, '')
  // 过滤非英文字符
  string_ = uselessString(string_)
  // 转换为大驼峰
  string_ = capitalizeCamelCase(string_)
  return string_
}

/**
 * 获取 typeNameSpace 中的类型, 假如是基础类型, 则返回基础类型
 * 假如不存在值, 则返回 emptyType
 * @param type
 */
export function getNameSpaceType(type?: string | null, emptyType = 'void') {
  if (!type) return emptyType
  const basicTyping = [
    'string',
    'string[]',
    'number',
    'number[]',
    'Record<string, any>',
    'Record<string, string>',
    'any',
    'boolean'
  ]
  return basicTyping.includes(type) ? type : `${TS_TYPE_NAME_SPACE}.${type}`
}

/**

 */
/**
 * 假如 definition 不在 definitions 模型上
 * 把类型 unshift 进 definitions 集合进行生成 typescript
 * 返回添加的 definition
 * @param definitions
 * @param definition
 */
export function unshiftDeDupDefinition(
  definitions: SwaggerDefinition[],
  definition: SwaggerDefinition
) {
  if (definitions.some((item) => item.name === definition.name)) {
    return definition
  }
  definitions.unshift(definition)
  return definition
}
