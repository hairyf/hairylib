import type { Numeric } from '../typings'
import Bignumber from 'bignumber.js'

export const BIG_INTS = {
  t: { v: 10 ** 12, d: 13, n: 't' },
  b: { v: 10 ** 9, d: 10, n: 'b' },
  m: { v: 10 ** 6, d: 7, n: 'm' },
  k: { v: 10 ** 3, d: 4, n: 'k' },
}

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

export interface FormatNumericOptions {
  delimiters?: Delimiter[] | false
  rounding?: Bignumber.RoundingMode
  decimals?: number
  zeromove?: boolean
  default?: string
  format?: Bignumber.Format
}

export function bignum(n: Numberish = '0') {
  return new Bignumber(numfix(n))
}

export function numfix(value: any) {
  return (Number.isNaN(Number(value)) || value.toString() === 'NaN') ? '0' : String(value)
}

export function gte(a: Numberish, b: Numberish) {
  return bignum(a).gte(bignum(b))
}

export function gt(a: Numberish, b: Numberish) {
  return bignum(a).gt(bignum(b))
}

export function lte(a: Numberish, b: Numberish) {
  return bignum(a).lte(bignum(b))
}

export function lt(a: Numberish, b: Numberish) {
  return bignum(a).lt(bignum(b))
}

export function plus(array: Numberish[], options?: DecimalOptions): string {
  const rounding = options?.r || Bignumber.ROUND_DOWN
  const decimal = options?.d || 0
  return array
    .filter(v => bignum(v).gt(0))
    .reduce((t, v) => t.plus(bignum(v)), bignum(0))
    .toFixed(decimal, rounding)
}

export function average(array: Numberish[], options?: DecimalOptions) {
  const rounding = options?.r || Bignumber.ROUND_DOWN
  const decimal = options?.d || 0
  if (array.length === 0)
    return '0'
  return bignum(plus(array))
    .div(array.length)
    .toFixed(decimal, rounding)
}

/**
 * calculate percentage
 * @param total
 * @param count
 */
export function percentage(total: Numberish, count: Numberish, options?: DecimalOptions) {
  options ??= { d: 3, r: Bignumber.ROUND_DOWN }
  const rounding = options?.r || Bignumber.ROUND_DOWN
  const decimal = options?.d || 3
  if (bignum(total).lte(0) || bignum(count).lte(0))
    return '0'
  return bignum(count).div(bignum(total)).times(100).toFixed(decimal, rounding)
}

/**
 * leading zeros
 * @param value
 * @param n
 * @param type
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

export function zeromove(value: Numberish) {
  return value.toString().replace(/\.?0+$/, '')
}

/**
 * format as a positive integer
 * @param value
 */
export function integer(value: Numberish) {
  return new Bignumber(numfix(value)).toFixed(0)
}

/**
 * retain n decimal places
 * @param value
 * @param n
 */
export function decimal(value: Numberish, n = 2) {
  let [integer, decimal] = numfix(value).split('.')
  if (n <= 0)
    return integer
  if (!decimal)
    decimal = '0'
  decimal = decimal.slice(0, n)
  decimal = decimal + '0'.repeat(n - decimal.length)
  return `${integer}.${decimal}`
}

export function parseNumeric(num: Numberish, delimiters: Delimiter[] = ['t', 'b', 'm']) {
  const mappings = [
    delimiters.includes('t') && ((n: Numberish) => gte(n, BIG_INTS.t.v) && BIG_INTS.t),
    delimiters.includes('b') && ((n: Numberish) => gte(n, BIG_INTS.b.v) && lt(n, BIG_INTS.t.v) && BIG_INTS.b),
    delimiters.includes('m') && ((n: Numberish) => gte(n, BIG_INTS.m.v) && lt(n, BIG_INTS.b.v) && BIG_INTS.m),
    delimiters.includes('k') && ((n: Numberish) => gte(n, BIG_INTS.k.v) && lt(n, BIG_INTS.m.v) && BIG_INTS.k),
  ]
  let options: { v: number, d: number, n: string } | undefined
  for (const analy of mappings) {
    const opts = analy && analy(bignum(num).toFixed(0))
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
export function formatNumeric(value: Numberish = '0', options?: FormatNumericOptions) {
  if (options?.default && bignum(value).isZero())
    return options?.default

  const {
    rounding = Bignumber.ROUND_DOWN,
    delimiters,
    format,
    decimals = 2,
  } = options || {}

  const config = parseNumeric(value, delimiters || [])
  let number = bignum(value).div(config.v).toFormat(decimals, rounding, {
    decimalSeparator: '.',
    groupSeparator: ',',
    groupSize: 3,
    secondaryGroupSize: 0,
    fractionGroupSeparator: ' ',
    fractionGroupSize: 0,
    ...format,
  })
  number = options?.zeromove ? zeromove(number) : number
  return `${number}${config.n}`
}

export { Bignumber }
