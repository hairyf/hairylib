import { formatEther as _formatEther } from 'ethers'
import type { Delimiter, Numberish } from '@hairy/utils'
import { Bignumber, formatNumeric, numerfix, unum } from '@hairy/utils'

export interface FormatEtherOptions {
  delimiters?: Delimiter[] | boolean
  separator?: boolean
  rounding?: Bignumber.RoundingMode
  zeromove?: boolean
  decimals?: number
  format?: Bignumber.Format
}

export function formatEther(value: Numberish = '0', options: FormatEtherOptions = {}) {
  const { separator = false, decimals, delimiters = false, rounding, zeromove = true } = options
  const number = _formatEther(unum(numerfix(value)).toFixed(0))
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

export { Bignumber }
