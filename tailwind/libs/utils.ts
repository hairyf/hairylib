/*
 * @Author: Mr.Mao
 * @Date: 2021-06-18 14:03:19
 * @LastEditTime: 2021-06-21 10:31:39
 * @Description: 
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */


/** 获取百分比尺寸 */
export const getPercentage = () => {
  return {
    full: '100%',
    auto: 'auto',
    '1/2': '50%',
    '1/3': '33.333333%',
    '2/3': '66.666667%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.666667%',
    '2/6': '33.333333%',
    '3/6': '50%',
    '4/6': '66.666667%',
    '5/6': '83.333333%',
  }
}

/**
 * 生成递进的数组
 * @param start 开始数值
 * @param end 结束数值
 * @returns 递进的数组
 */
const generateArray = (start: number, end: number) => {
  start = Number(start)
  end = Number(end)
  end = end > start ? end : start
  return [...Array(end + 1).keys()].slice(start)
}

/** 获取 0 ~ max 尺寸 */
export const getSpacing = (end: number, progressiveMax = 50) => {
  let progressive = 2
  const powerRatios = [16, 48, 80, 256, 320, 384]
  const generates = generateArray(0, end).
    filter(v => {
      if (powerRatios.some(n => v === n)) {
        progressive = progressive * 2
      } else if (v === 400) {
        progressive = progressiveMax
      }
      return v % progressive === 0
    })
  const spacing = generates.reduce((total, current) => {
    total[current] = `${current / 16}rem`
    return total
  }, {} as Record<string, string>)
  spacing['px'] = '1px'
  return spacing
}