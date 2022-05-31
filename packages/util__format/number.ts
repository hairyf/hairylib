import isNumber from 'lodash/isNumber'

/**
 * 数字位数不够时，进行前补零
 * @param number_ 数值
 * @param lh 长度
 */
export const prefixZero = (number_: number | string, lh = 2) => {
  return (new Array(lh).join('0') + number_).slice(-lh)
}

/**
 * 格式化为正整数
 * @param value 传入字符
 */
export const integer = (value: string | number) => {
  return 0 | +value
}

/**
 * 保留 lh 位小数点
 * @param value 值
 * @param lh 小数点长度
 */
export const keepDecimal = (value: string | number, lh = 2) => {
  if (isNumber(value)) value = String(value)
  // eslint-disable-next-line prefer-const
  let [integer, decimal] = value.split('.')
  if (!decimal) return integer
  decimal = decimal.slice(0, 2)
  decimal = prefixZero(decimal, lh)
  return `${integer}.${decimal}`
}

/**
 * 格式化数字千位分隔符
 * @param target 数值
 * @param unit 单位
 */
export const thousandBitSeparator = (target: number | string, unit = ',') => {
  if (!target) return ''
  const exp = new RegExp('(\\d)(?=(\\d{3})+$)', 'ig')
  const replace = (v: string) => v.replace(exp, `$1${unit || ''}`)
  const part = String(target).split('.').map(replace)
  return part.join('.')
}

/**
 * 计算百分比
 * @param total 总数
 * @param count 数量
 * @returns
 */
export const percentage = (total: number, count: number) => {
  if (+total === 0) return 0
  if (+count === 0) return 0
  return (count / total) * 100
}
