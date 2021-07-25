/*
 * @Author: Mr.Mao
 * @Date: 2021-06-28 16:47:04
 * @LastEditTime: 2021-07-25 11:18:46
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */

import dayjs from 'dayjs'
import { pickBy } from 'lodash'

/**
 * 获取数据类型
 * @param target 检测对象
 * @returns 返回字符串
 */
export const checkedTypeof = (target: any): string => {
  return Object.prototype.toString.call(target).slice(8, -1)
}
/**
 * 剔除字符串代码字段
 * @param str 字符串
 * @returns 剔除字符串
 */
export const removeStrCode = (str: string) => {
  return str.replace(/<[\/\!]*[^<>]*>/gi, '')
}
/**
 * 如果有单位，如百分比，px单位等，直接返回，如果是纯粹的数值，则加上px单位
 * @param unit 单元
 * @returns string
 */
export const analyUnit = (unit: string | number) => {
  return typeof unit === 'string' && /[^0-9]/g.test(unit) ? unit : unit + 'px'
}
/** size 转换配置 */
export type AnalySizeOption =
  | string
  | number
  | { width: string | number; height: string | number }
  | [number | string, number | string]
/**
 * 将 size 转换为宽高
 * @param size { AnalySizeOption }
 * @returns
 */
export const analySize = (size: AnalySizeOption) => {
  // 单数值正方形
  if (typeof size === 'string' || typeof size === 'number') {
    return { width: analyUnit(size), height: analyUnit(size) }
  }
  // 数组形式尺寸
  if (Array.isArray(size)) {
    return {
      width: analyUnit(size[0]),
      height: analyUnit(size[1])
    }
  }
  // 对象形式尺寸
  if (typeof size === 'object') {
    return {
      width: analyUnit(size.width),
      height: analyUnit(size.height)
    }
  }
  return { width: '', height: '' }
}
/**
 * 时间戳格式化(秒)
 * @param timestamp 格式化时间戳(秒)
 * @param format 格式化时间格式
 * @returns 格式时间字符串
 */
export const formatUnix = (timestamp: number, format = 'YYYY-MM-DD HH:mm:ss') => {
  return dayjs.unix(timestamp).format(format)
}
/**
 * 过滤为价格(两位小数点)
 * @param value 传入字符
 */
export const filterPrice = (value: string) => {
  return value
    .replace(/^[^\d+]/, '')
    .replace(/[^\d{1,}.\d{1,}|\d{1,}]/g, '')
    .replace('.', '$#$')
    .replace(/\./g, '')
    .replace('$#$', '.')
    .replace(/\.{2,}/g, '.')
    .replace(/^(-)*(\d+)\.(\d\d).*$/, '$1$2.$3')
}
/**
 * 过滤为正整数
 * @param value 传入字符
 */
export const filterInteger = (value: string) => {
  return value.replace(/^(0+)|[^\d]+/g, '')
}
/**
 * 地址参数计算
 * @param url 传入url
 * @param params 请求参数
 * @returns 拼接url
 */
export const paramsAnaly = (url: string, params: Record<string, any>) => {
  const queryStr = Object.keys(params).map((key) => `${key}=${params[key]}`)
  if (queryStr.length > 0) {
    url += '?' + queryStr.join('&')
  }
  return url
}
/**
 * 生成递进的数组
 * @param start 开始数值
 * @param end 结束数值
 * @returns 递进的数组
 */
export const generateArray = (start: number, end: number) => {
  start = Number(start)
  end = Number(end)
  end = end > start ? end : start
  return [...Array(end + 1).keys()].slice(start)
}

/**
 * 颜色混合器
 * @param colorOne 颜色值
 * @param colorTwo 颜色值
 * @param ratio 根据 colorTwo 混合比例, 0~1 区间, 1 则是完全的 colorTwo
 * @returns 混合颜色
 */
export const blendColor = (colorOne: string, colorTwo: string, ratio: number) => {
  ratio = Math.max(Math.min(Number(ratio), 1), 0)
  const r1 = parseInt(colorOne.substring(1, 3), 16)
  const g1 = parseInt(colorOne.substring(3, 5), 16)
  const b1 = parseInt(colorOne.substring(5, 7), 16)
  const r2 = parseInt(colorTwo.substring(1, 3), 16)
  const g2 = parseInt(colorTwo.substring(3, 5), 16)
  const b2 = parseInt(colorTwo.substring(5, 7), 16)
  let r: string | number = Math.round(r1 * (1 - ratio) + r2 * ratio)
  let g: string | number = Math.round(g1 * (1 - ratio) + g2 * ratio)
  let b: string | number = Math.round(b1 * (1 - ratio) + b2 * ratio)
  r = ('0' + (r || 0).toString(16)).slice(-2)
  g = ('0' + (g || 0).toString(16)).slice(-2)
  b = ('0' + (b || 0).toString(16)).slice(-2)
  return '#' + r + g + b
}

/**
 * 将 hex 颜色转成 rgb
 * @param hex
 * @param opacity
 * @returns rgba String
 */
export const hexToRgba = (hex: string, opacity: number) => {
  const RGBA =
    'rgba(' +
    parseInt('0x' + hex.slice(1, 3)) +
    ',' +
    parseInt('0x' + hex.slice(3, 5)) +
    ',' +
    parseInt('0x' + hex.slice(5, 7)) +
    ',' +
    opacity +
    ')'
  return {
    red: parseInt('0x' + hex.slice(1, 3)),
    green: parseInt('0x' + hex.slice(3, 5)),
    blue: parseInt('0x' + hex.slice(5, 7)),
    rgba: RGBA
  }
}

/**
 * 自定义 Promise 等待
 * @param code 等待时间
 */
export const awaitPromise = (code = 1000) => {
  return new Promise((resolve) => setTimeout(resolve, code))
}

/**
 * 替换 html string 中任意 tag 内任意 attr 值
 * @param html html string
 * @param option
 * @returns
 */
export const setHtmlStrTagAttr = (
  html: string,
  option: {
    tag: string | string[]
    attr: string
    value: string
  }
) => {
  if (typeof html !== 'string') {
    throw new Error('error: html is not string')
  }
  const tags = Array.isArray(option.tag) ? option.tag : [option.tag]
  const transform = (html: string, tag: string) => {
    const replaceReg = new RegExp(
      '<' + tag + '[^>]*(' + option.attr + '=[\'"](.*?)[\'"])?[^>]*>',
      'gi'
    )
    const subReg = new RegExp(`${option.attr}=['"](.*?)['"]`, 'gis')
    const setHtmlStr = html.replace(replaceReg, (match) => {
      //包含option.attr属性,替换option.attr
      if (match.indexOf(option.attr) > 0) {
        return match.replace(subReg, `${option.attr}="${option.value}"`)
      }
      //不包含option.attr属性,添加option.attr
      const prefix = match.substr(0, tag.length + 1)
      let suffix = match.substr(tag.length + 2, match.length)
      suffix = suffix ? ` ${suffix}` : '>'
      return `${prefix} ${option.attr}="${option.value}"${suffix}`
    })
    if (!option.value) {
      return setHtmlStr.replace(subReg, '')
    }
    return setHtmlStr
  }
  return tags.reduce((total, tag) => transform(total, tag), html)
}

/**
 * 移除所有标签的一个或多个属性
 * @param html html string
 * @param attr attr string
 * @returns html
 */
export const removeHtmlStrTagAttr = (html: string, attr: string | string[]) => {
  const attrs = Array.isArray(attr) ? attr : [attr]
  return attrs.reduce(
    (total, attr) => total.replace(new RegExp(`${attr}=['"](.*?)['"]`, 'gis'), ''),
    html
  )
}

/**
 * 根据过滤返回对应数据
 * @param params
 * @param filters
 * @returns params
 */
export const pickByParams = <T extends object>(params: T, filters: any[]) => {
  const pickValue = pickBy(params, (value) => {
    return !filters.some((v) => value === v)
  })
  if (Array.isArray(params)) {
    return Object.values(pickValue) as any[]
  }
  return pickValue as Record<string, any>
}
