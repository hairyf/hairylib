import type { Numeric } from '../typings'
import { isNumber, isString } from '../util'

export type Dimension = Numeric | [Numeric, Numeric] | { width: Numeric, height: Numeric }

export function formatUnit(value: Numeric, unit = 'px') {
  if (!(isString(value) || isNumber(value)))
    return ''
  value = String(value)
  return /\D/.test(value) ? value : value + unit
}

export function formatSize(dimension: Dimension, unit?: string): { width: string, height: string } {
  const _formatUnit = (value: Numeric) => formatUnit(value, unit)
  if (typeof dimension === 'string' || typeof dimension === 'number')
    return { width: _formatUnit(dimension), height: _formatUnit(dimension) }

  if (Array.isArray(dimension))
    return { width: _formatUnit(dimension[0]), height: _formatUnit(dimension[1]) }

  if (typeof dimension === 'object')
    return { width: _formatUnit(dimension.width), height: _formatUnit(dimension.height) }

  return { width: '', height: '' }
}
