/*
 * @Author: Mr.Mao
 * @Date: 2021-06-18 14:03:19
 * @LastEditTime: 2021-06-21 10:31:39
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */

import { generateArray } from '@tuimao/core'

export * from './types'

interface GenerateSpacingOpts {
  /** 步进值, step与stepMax设置为 1 则不进行步进; @default 2 */
  step?: number
  /** 步进极限值, 到达步进翻倍节点之后, 将以极限值步进 @default 50 */
  stepMax?: number
  /** 步进翻倍节点 @default [16, 48, 80, 256, 320, 384] */
  nodes?: number[]
  /**
   * 单位计算(默认以得出px > rem 单位)
   * @default (num: number) => num / 16
   */
  compute?: (num: number) => number
  /** 单位 @default 'rem' */
  unit?: string
}

/** 生成 0 ~ max Spacing 尺寸 */
export const generateSpacing = (max: number, option?: GenerateSpacingOpts) => {
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

/** 将尺寸进行反转 */
export const negative = (spacing: Record<string, string>) => {
  const _spacing: Record<string, string> = {}
  for (const [key, val] of Object.entries(spacing)) {
    _spacing[`-${key}`] = `-${val}`
  }
  return _spacing
}
