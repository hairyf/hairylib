import type { Bignumber, Delimiter, Numberish } from '@hairy/utils'
import { BigNum, formatNumeric, numerfix } from '@hairy/utils'
import { formatEther as _formatEther } from 'ethers'

export interface FormatEtherOptions {
  delimiters?: Delimiter[] | boolean
  separator?: boolean
  rounding?: Bignumber.RoundingMode
  zeromove?: boolean
  decimals?: number
  format?: Bignumber.Format
}

export function formatEther(value: Numberish = '0', options: FormatEtherOptions = {}): string {
  const { separator = false, decimals, delimiters = false, rounding, zeromove = true } = options
  const number = _formatEther(BigNum(numerfix(value)).toFixed(0))
  const groupSeparator = separator === false ? '' : ','
  return formatNumeric(number, {
    format: { groupSeparator, ...options.format },
    delimiters: typeof delimiters === 'boolean'
      ? delimiters && ['m', 'b', 't']
      : delimiters,
    decimals,
    rounding,
    zeromove,
  })
}
