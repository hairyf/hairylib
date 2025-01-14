import Bignumber from 'bignumber.js'

export const BIG_INTS = {
  t: { v: 10 ** 12, d: 13, n: 't' },
  b: { v: 10 ** 9, d: 10, n: 'b' },
  m: { v: 10 ** 6, d: 7, n: 'm' },
  k: { v: 10 ** 3, d: 4, n: 'k' },
}

/**
 *  Any type that can be used where a numeric value is needed.
 */
export type Numeric = number | bigint | string

/**
 *  Any type that can be used where a big number is needed.
 */
export type Numberish = Numeric | { toString: (...args: any[]) => string }

export type Delimiter = 'k' | 'm' | 'b' | 't'

export interface DecimalOptions {
  d?: number
  r?: Bignumber.RoundingMode
}

export interface FormatGroupOptions {
  size?: number
  symbol?: string
}
export interface FormatNumericOptions extends DecimalOptions {
  delimiters?: Delimiter[] | false
  format?: Bignumber.Format
}

export function unum(num: Numeric = '0') {
  return new Bignumber(numerfix(num))
}

export function gte(num: Numeric, n: Numeric) {
  return unum(num).gte(unum(n))
}

export function gt(num: Numeric, n: Numeric) {
  return unum(num).gt(unum(n))
}

export function lte(num: Numeric, n: Numeric) {
  return unum(num).lte(unum(n))
}

export function lt(num: Numeric, n: Numeric) {
  return unum(num).lt(unum(n))
}

export function plus(array: Numeric[], options?: DecimalOptions): string {
  const rounding = options?.r || Bignumber.ROUND_DOWN
  const decimal = options?.d || 0
  return array
    .filter(v => unum(v).gt(0))
    .reduce((t, v) => t.plus(unum(v)), unum(0))
    .toFixed(decimal, rounding)
}

export function average(array: Numeric[], options?: DecimalOptions) {
  const rounding = options?.r || Bignumber.ROUND_DOWN
  const decimal = options?.d || 0
  if (array.length === 0)
    return '0'
  return unum(plus(array))
    .div(array.length)
    .toFixed(decimal, rounding)
}

/**
 * calculate percentage
 * @param total
 * @param count
 */
export function percentage(total: Numeric, count: Numeric, options?: DecimalOptions) {
  options ??= { d: 3, r: Bignumber.ROUND_DOWN }
  const rounding = options?.r || Bignumber.ROUND_DOWN
  const decimal = options?.d || 3
  if (unum(total).lte(0) || unum(count).lte(0))
    return '0'
  return unum(count).div(unum(total)).times(100).toFixed(decimal, rounding)
}

/**
 * leading zeros
 * @param number_
 * @param lh
 */
export function zerofill(
  value: Numberish,
  n = 2,
  type: 'positive' | 'reverse' = 'positive',
) {
  const _value = integer(value)
  if (_value.length >= n)
    return value
  const zero = '0'.repeat(n - _value.length)
  if (type === 'positive')
    return zero + value
  if (type === 'reverse')
    return zero + value
  return ''
}

export function numerfix(value: any) {
  const _isNaN = isNaN(Number(value)) || value.toString() === 'NaN'
  if (_isNaN)
    console.warn(`numerfix(${value}): value is not the correct value. To ensure the normal operation of the program, it will be converted to zero`)
  return (_isNaN) ? '0' : String(value)
}

/**
 * format as a positive integer
 * @param value
 */
export function integer(value: Numberish) {
  return new Bignumber(numerfix(value)).toFixed(0)
}

/**
 * retain n decimal places
 * @param value
 * @param n
 */
export function decimal(value: Numberish, n = 2) {
  let [integer, decimal] = numerfix(value).split('.')
  if (n <= 0)
    return integer
  if (!decimal)
    decimal = '0'
  decimal = decimal.slice(0, n)
  decimal = decimal + '0'.repeat(n - decimal.length)
  return `${integer}.${decimal}`
}

export function parseNumeric(num: Numeric, delimiters: Delimiter[] = ['t', 'b', 'm']) {
  const mappings = [
    delimiters.includes('t') && ((n: Numeric) => gte(n, BIG_INTS.t.v) && BIG_INTS.t),
    delimiters.includes('b') && ((n: Numeric) => gte(n, BIG_INTS.b.v) && lt(n, BIG_INTS.t.v) && BIG_INTS.b),
    delimiters.includes('m') && ((n: Numeric) => gte(n, BIG_INTS.m.v) && lt(n, BIG_INTS.b.v) && BIG_INTS.m),
    delimiters.includes('k') && ((n: Numeric) => gte(n, BIG_INTS.k.v) && lt(n, BIG_INTS.m.v) && BIG_INTS.k),
  ]
  let options: { v: number; d: number; n: string } | undefined
  for (const analy of mappings) {
    const opts = analy && analy(unum(num).toFixed(0))
    opts && (options = opts)
  }
  return options || { v: 1, d: 0, n: '' }
}

/**
 * format number thousand separator and unit
 * @param value
 * @param options
 * @returns
 */

export function formatNumeric(value: Numeric = '0', options?: FormatNumericOptions) {
  const { d = 2, r = Bignumber.ROUND_DOWN, delimiters, format } = options || {}
  const config = parseNumeric(value, delimiters || [])
  const number = unum(value).div(config.v).toFormat(d, r, format)
  return `${number}${config.n}`
}
