import type { Numeric } from '../typings'
import { isNumber, isString } from 'lodash-es'

export type Dimension = Numeric | [Numeric, Numeric] | { width: Numeric, height: Numeric }

export function unit(value: Numeric, unit = 'px') {
  if (!(isString(value) || isNumber(value)))
    return ''
  value = String(value)
  return /\D/.test(value) ? value : value + unit
}

const _unit = (value: Numeric, _unit?: string) => unit(value, _unit)

export function size(dimension: Dimension, unit?: string): { width: string, height: string } {
  const format = (value: Numeric) => _unit(value, unit)
  if (typeof dimension === 'string' || typeof dimension === 'number')
    return { width: format(dimension), height: format(dimension) }

  if (Array.isArray(dimension))
    return { width: format(dimension[0]), height: format(dimension[1]) }

  if (typeof dimension === 'object')
    return { width: format(dimension.width), height: format(dimension.height) }

  return { width: '', height: '' }
}
