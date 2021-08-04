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
    '5/6': '83.333333%'
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

interface GetSpacingOpts {
  /** 步进值, 0 则不进行步进; @default 2 */
  step?: number
  /** 步进翻倍节点 @default [16, 48, 80, 256, 320, 384] */
  nodes?: number[]
  /** 步进极限值 @default 50 */
  stepMax?: number
  /**
   * 单位计算(默认以得出px > rem 单位)
   * @default (num: number) => num / 16
   */
  compute?: (num: number) => number
  /** 单位 @default 'rem' */
  unit?: string
}
/** 获取 0 ~ max 尺寸 */
export const getSpacing = (max: number, option?: GetSpacingOpts) => {
  const nodes = option?.nodes ?? [16, 48, 80, 256, 320, 384]
  const stepMax = option?.stepMax ?? 50
  const compute = option?.compute ?? ((num: number) => num / 16)
  const unit = option?.unit ?? 'rem'
  let step = option?.step ?? 2

  /** 生成数值数据 */
  const generates = generateArray(0, max).filter((v) => {
    if (nodes.some((n) => v === n)) {
      step = step * 2
    } else if (v === 400) {
      step = stepMax
    }
    return v % step === 0
  })

  /** 拼接单位 */
  const spacing = generates.reduce((total, current) => {
    total[current] = `${compute(current)}${unit}`
    return total
  }, <Record<string, string>>{})

  spacing['px'] = '1px'
  spacing[unit] = '1' + unit

  return spacing
}
