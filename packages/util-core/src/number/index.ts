/* eslint-disable ts/no-namespace */
/* eslint-disable ts/no-redeclare */
import type { Numberish } from '../typings'
import _Bignumber from 'bignumber.js'
import { numberish } from '../util'

export const DEFAULT_BIGNUM_CONFIG: _Bignumber.Config = {
  ROUNDING_MODE: _Bignumber.ROUND_UP,
  DECIMAL_PLACES: 6,
}

// reexport bignumber.js namespace
export namespace Bignumber {
  export type RoundingMode = _Bignumber.RoundingMode
  export type Format = _Bignumber.Format
  export type Config = _Bignumber.Config
  export type Instance = _Bignumber.Instance
  export type Value = _Bignumber.Value
}

export const Bignumber = _Bignumber.clone(DEFAULT_BIGNUM_CONFIG)
/**
 * export bignumber.js
 *
 * do not use Bignumber directly, use bignumber function instead
 */

export const BIG_INTS = {
  t: { v: 10 ** 12, d: 13, n: 't' },
  b: { v: 10 ** 9, d: 10, n: 'b' },
  m: { v: 10 ** 6, d: 7, n: 'm' },
  k: { v: 10 ** 3, d: 4, n: 'k' },
}

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

export function bignumber(n: Numberish = '0', base?: number) {
  return new Bignumber(numberish(n), base)
}

bignumber.clone = function (config: Bignumber.Config) {
  return Bignumber.clone({ ...DEFAULT_BIGNUM_CONFIG, ...config })
}

export function gte(a: Numberish, b: Numberish) {
  return bignumber(a).gte(bignumber(b))
}

export function gt(a: Numberish, b: Numberish) {
  return bignumber(a).gt(bignumber(b))
}

export function lte(a: Numberish, b: Numberish) {
  return bignumber(a).lte(bignumber(b))
}

export function lt(a: Numberish, b: Numberish) {
  return bignumber(a).lt(bignumber(b))
}

export function plus(array: Numberish[], options?: DecimalOptions): string {
  const rounding = options?.r || Bignumber.ROUND_DOWN
  const decimal = options?.d || 0
  return array
    .filter(v => bignumber(v).gt(0))
    .reduce((t, v) => t.plus(bignumber(v)), bignumber(0))
    .toFixed(decimal, rounding)
}

export function divs(array: Numberish[], options?: DecimalOptions) {
  const rounding = options?.r || Bignumber.ROUND_DOWN
  const decimal = options?.d || 0
  return array.reduce((t, v) => t.div(bignumber(v)), bignumber(1)).toFixed(decimal, rounding)
}

export function average(array: Numberish[], options?: DecimalOptions) {
  const rounding = options?.r || Bignumber.ROUND_DOWN
  const decimal = options?.d || 0
  if (array.length === 0)
    return '0'
  return bignumber(plus(array))
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
  if (bignumber(total).lte(0) || bignumber(count).lte(0))
    return '0'
  return bignumber(count).div(bignumber(total)).times(100).toFixed(decimal, rounding)
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
  return numberish(value).toString().replace(/\.?0+$/, '')
}

/**
 * format as a positive integer
 * @param value
 */
export function integer(value: Numberish) {
  return new Bignumber(numberish(value)).toFixed(0)
}

/**
 * retain n decimal places
 * @param value
 * @param n
 */
export function decimal(value: Numberish, n = 2) {
  let [integer, decimal] = numberish(value).split('.')
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
    const opts = analy && analy(bignumber(num).toFixed(0))
    opts && (options = opts)
  }
  return options || { v: 1, d: 0, n: '' }
}

/**
 * format number thousand separator and unit
 * @param value
 * @param options
 */
export function formatNumeric(value: Numberish = '0', options?: FormatNumericOptions) {
  if (options?.default && bignumber(value).isZero())
    return options?.default

  const {
    rounding = Bignumber.ROUND_DOWN,
    delimiters,
    format,
    decimals = 2,
  } = options || {}

  const config = parseNumeric(value, delimiters || [])
  let number = bignumber(value).div(config.v).toFormat(decimals, rounding, {
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
