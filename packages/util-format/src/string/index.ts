/**
 * 截取前后字符，隐藏中间的字符
 * @param value 处理的字符
 * @param mode [0] 前截取多少位 [1] symbol 复制多少份 [2] 后截取多少位
 * @param symbol 中间，及[1]复制字符
 * @returns
 */
export function cover(value: string, mode: [number, number, number], symbol = '*') {
  return value.slice(0, mode[0]) + symbol.repeat(mode[1]) + value.slice(-mode[2])
}
