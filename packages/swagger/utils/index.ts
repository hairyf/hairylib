/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-28 13:43:41
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2021-12-30 10:44:24
 */
import { transliterate } from 'transliteration'
import { capitalizeCamelCase } from '@hairy/core'
import { TS_TYPE_NAME_SPACE } from '../internal'

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
    console.trace('\n\nvarName inner is not defined\n')
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

export function getNameSpaceType(name: string) {
  return `${TS_TYPE_NAME_SPACE}.${name}`
}
