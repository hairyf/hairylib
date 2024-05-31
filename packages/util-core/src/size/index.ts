import isNumber from 'lodash/isNumber'
import isString from 'lodash/isString'
import type { AtwillNumber } from '../typings'

export function atWillToUnit(value: AtwillNumber, unit = 'px') {
  if (!(isString(value) || isNumber(value)))
    return ''
  return (isString(value) && /\D/g.test(value)) ? value : value + unit
}

/** size 转换配置 */
export type AtWillSize = AtwillNumber | [AtwillNumber, AtwillNumber] | { width: AtwillNumber; height: AtwillNumber }
export interface Size { width: string; height: string }

/**
 * 将 size 转换为宽高，用于元素宽高
 * @param size AtWillSize
 * @returns
 */
export function atWillToSize(size: AtWillSize, unit?: string): Size {
  const _atWillToUnit = (value: AtwillNumber) => atWillToUnit(value, unit)
  // 单数值正方形
  if (typeof size === 'string' || typeof size === 'number')
    return { width: _atWillToUnit(size), height: _atWillToUnit(size) }

  // 数组形式尺寸
  if (Array.isArray(size))
    return { width: _atWillToUnit(size[0]), height: _atWillToUnit(size[1]) }

  // 对象形式尺寸
  if (typeof size === 'object')
    return { width: _atWillToUnit(size.width), height: _atWillToUnit(size.height) }

  return { width: '', height: '' }
}
