import Bignumber from 'bignumber.js'

/**
 *  Any type that can be used where a numeric value is needed.
 */
export type Numeric = number | bigint | string

/**
 *  Any type that can be used where a big number is needed.
 */
export type Numberish = Numeric | { toString: (...args: any[]) => string }

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

interface ThousandBitSeparatorOptions {
  integer?: boolean
  decimal?: boolean
}
/**
 * format number thousand separator
 * @param target
 * @param unit
 */
export function thousandBitSeparator(
  target: Numberish,
  unit = ',',
  options: ThousandBitSeparatorOptions = {},
) {
  options.integer = options.integer ?? true
  options.decimal = options.decimal ?? true
  const exp = /(\d)(?=(\d{3})+$)/ig
  const replace = (v: string) => v.replace(exp, `$1${unit || ''}`)
  let [integer = '0', decimal = ''] = numerfix(target).split('.')
  if (options.integer)
    integer = replace(integer)
  if (options.decimal)
    decimal = replace(decimal)
  return [integer, decimal].filter(Boolean).join('.')
}

/**
 * calculate percentage
 * @param total
 * @param count
 */
export function percentage(total: Numberish, count: Numberish, decimals = 0) {
  const _total = new Bignumber(numerfix(total))
  const _count = new Bignumber(numerfix(count))
  if (_total.eq(0))
    return '0'
  if (_count.eq(0))
    return '0'

  return _count.dividedBy(_total).multipliedBy(100).toFixed(decimals, Bignumber.ROUND_DOWN)
}
