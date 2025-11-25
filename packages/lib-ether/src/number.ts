import type { Bignumber, Delimiter, Numberish } from '@hairy/utils'
import { bignumber, formatNumeric } from '@hairy/utils'
import { formatEther as _formatEther } from 'ethers'

export interface FormatEtherOptions {
  delimiters?: Delimiter[] | boolean
  separator?: boolean
  rounding?: Bignumber.RoundingMode
  zeromove?: boolean
  decimals?: number
  format?: Bignumber.Format
  default?: string
}

export function formatEther(value: Numberish = '0', options: FormatEtherOptions = {}): string {
  const { separator = false, decimals, delimiters = false, rounding, zeromove = true, default: _default } = options
  const number = _formatEther(bignumber(value).toFixed(0))
  const groupSeparator = separator === false ? '' : ','
  return formatNumeric(number, {
    format: { groupSeparator, ...options.format },
    delimiters: typeof delimiters === 'boolean'
      ? delimiters && ['m', 'b', 't']
      : delimiters,
    default: _default,
    decimals,
    rounding,
    zeromove,
  })
}
