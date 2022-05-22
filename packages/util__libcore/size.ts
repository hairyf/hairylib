import isNumber from 'lodash/isNumber'
import isString from 'lodash/isString'
import { AtWillNumber } from './typings'

export const textToUnit = (value: AtWillNumber, unit = 'px') => {
  if (!(isString(value) || isNumber(value))) return ''
  return isString(value) && /\D/g.test(value) ? value : value + unit
}

/** size 转换配置 */
export type AtWillSize = AtWillNumber | [AtWillNumber, AtWillNumber] | { width: AtWillNumber; height: AtWillNumber }
export type Size = { width: string; height: string }

/**
 * 将 size 转换为宽高，用于元素宽高
 * @param size AtWillSize
 * @returns
 */
export const atWillToSize = (size: AtWillSize, unit?: string): Size => {
  const _textToUnit = (value: AtWillNumber) => textToUnit(value, unit)
  // 单数值正方形
  if (typeof size === 'string' || typeof size === 'number') {
    return { width: _textToUnit(size), height: _textToUnit(size) }
  }
  // 数组形式尺寸
  if (Array.isArray(size)) {
    return { width: _textToUnit(size[0]), height: _textToUnit(size[1]) }
  }
  // 对象形式尺寸
  if (typeof size === 'object') {
    return { width: _textToUnit(size.width), height: _textToUnit(size.height) }
  }
  return { width: '', height: '' }
}
