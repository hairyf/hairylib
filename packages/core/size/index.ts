/*
 * @Author: Mr.Mao
 * @Date: 2021-08-03 13:56:26
 * @LastEditTime: 2021-08-10 15:13:26
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */

import { isString } from 'lodash'
import { LooseNumber } from '@hairy/core'

/**
 * 如果有单位，如百分比，px单位等，直接返回，如果是纯粹的数值，则加上px单位
 * @param size 尺寸
 * @param unit 单元
 * @returns string
 */
export const analyUnit = (size: LooseNumber, unit = 'px') => {
  return isString(size) && /\D/g.test(size) ? size : size + unit
}

/** size 转换配置 */
export type AnalySizeOption =
  | LooseNumber
  | [LooseNumber, LooseNumber]
  | { width: LooseNumber; height: LooseNumber }

/**
 * 将 size 转换为宽高
 * @param size { AnalySizeOption }
 * @returns
 */
export const analySize = (size: AnalySizeOption, unit?: string) => {
  // 单数值正方形
  if (typeof size === 'string' || typeof size === 'number') {
    return { width: analyUnit(size, unit), height: analyUnit(size, unit) }
  }
  // 数组形式尺寸
  if (Array.isArray(size)) {
    return { width: analyUnit(size[0], unit), height: analyUnit(size[1], unit) }
  }
  // 对象形式尺寸
  if (typeof size === 'object') {
    return { width: analyUnit(size.width, unit), height: analyUnit(size.height, unit) }
  }
  return { width: '', height: '' }
}
