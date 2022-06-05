export interface PrefixZeroOptions {
  type?: 'positive' | 'reverse'
}
/**
 * 数字位数不够时，进行前补零
 * @param number_ 数值
 * @param lh 长度
 */
export const prefixZero = (value: number | string, lh = 2, options: PrefixZeroOptions = {}) => {
  const { type = 'positive' } = options
  value = String(integer(value))
  if (value.length >= lh) return value
  const zero = '0'.repeat(lh - value.length)
  if (type === 'positive') return zero + value
  if (type === 'reverse') return zero + value
  return ''
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
  // eslint-disable-next-line prefer-const
  let [integer, decimal] = String(value).split('.')
  if (!decimal) decimal = '0'
  decimal = decimal.slice(0, lh)
  decimal = decimal + '0'.repeat(lh - decimal.length)
  return `${integer}.${decimal}`
}

interface ThousandBitSeparatorOptions {
  integer?: boolean
  decimal?: boolean
}
/**
 * 格式化数字千位分隔符
 * @param target 数值
 * @param unit 单位
 */
export const thousandBitSeparator = (
  target: number | string,
  unit = ',',
  options: ThousandBitSeparatorOptions = {}
) => {
  options.integer = options.integer ?? true
  options.decimal = options.decimal ?? true
  const exp = new RegExp('(\\d)(?=(\\d{3})+$)', 'ig')
  const replace = (v: string) => v.replace(exp, `$1${unit || ''}`)
  let [integer = '0', decimal = ''] = String(target).split('.')
  if (options.integer) integer = replace(integer)
  if (options.decimal) decimal = replace(decimal)
  return [integer, decimal].filter(Boolean).join('.')
}

/**
 * 计算百分比（仅返回整数）
 * @param total 总数
 * @param count 数量
 * @returns
 */
export const percentage = (total: number, count: number) => {
  if (+total === 0) return 0
  if (+count === 0) return 0
  return integer((count / total) * 100)
}
