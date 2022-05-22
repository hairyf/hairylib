/**
 * 数字位数不够时，进行前补零
 * @param number_ 数值
 * @param lh 长度
 */
export const prefixZero = (number_: number, lh = 2) => {
  return (new Array(lh).join('0') + number_).slice(-lh)
}
/**
 * 格式化数字千位分隔符
 * @param target 数值
 * @param unit 单位
 */
export const thousandBitSeparator = (target: number | string, unit = ',') => {
  if (!target) return ''
  const part = String(target).split('.')
  for (let index = 0; index < part.length; index++) {
    part[index] = part[index].replace(new RegExp('(\\d)(?=(\\d{3})+$)', 'ig'), `$1${unit || ''}`)
  }
  return part.join('.')
}

/**
 * 格式化为正整数
 * @param value 传入字符
 */
export const integer = (value: string | number) => {
  return 0 | +value
}

/**
 * 截取前后字符，隐藏中间的字符
 * @param value 处理的字符
 * @param mode [0] 前截取多少位 [1] symbol 复制多少份 [2] 后截取多少位
 * @param symbol 中间，及[1]复制字符
 * @returns
 */
export const cover = (value: string, mode: [number, number, number], symbol = '*') => {
  return value.slice(0, mode[0]) + symbol.repeat(mode[1]) + value.slice(-mode[2])
}
