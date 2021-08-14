/*
 * @Author: Mr.Mao
 * @Date: 2021-08-03 13:57:13
 * @LastEditTime: 2021-08-06 11:56:53
 * @Description:
 * @LastEditors: Zhilong
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import dayjs from 'dayjs'
import { isArray } from 'lodash'

/**
 * 剔除字符串代码字段
 * @param str 字符串
 * @returns 剔除字符串
 */
export const removeStringCode = (string_: string) => string_.replace(/<[!/]*[^<>]*>/gi, '')

/**
 * 过滤为价格(两位小数点)
 * @param value 传入字符
 */
export const filterPrice = (value: string) => {
  return value
    .replace(/^[^\d+]/, '')
    .replace(/[^\d,.{|}]/g, '')
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
  return value.replace(/^(0+)|\D+/g, '')
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
 * 替换 html string 中任意 tag 内任意 attr 值
 * @param html html string
 * @param option
 * @returns
 */
export const setInnerHTMLAttributes = (
  html: string,
  option: {
    tag: string | string[]
    attr: string | string[]
    value: string
  }
) => {
  if (typeof html !== 'string') {
    throw new TypeError('error: html is not string')
  }
  if (Array.isArray(option.attr)) {
    const string_: string = option.attr.reverse().reduce((old, item) => {
      return setInnerHTMLAttributes(old, { ...option, attr: item })
    }, html)
    return string_
  }
  const tags = Array.isArray(option.tag) ? option.tag : [option.tag]
  const transform = (html: string, tag: string) => {
    // 需找带指定属性的标签 > 一行代码
    const replaceReg = new RegExp(
      '<' + tag + '[^>]*(' + option.attr + '=[\'"](.*?)[\'"])?[^>]*>',
      'gi'
    )
    // 选择对应属性的字符  attr='***' | attr="***"
    const subReg = new RegExp(`${option.attr}=['"](.*?)['"]`, 'gis')
    return html.replace(replaceReg, (match) => {
      //包含option.attr属性,替换option.attr
      if (match.indexOf(option.attr as string) > 0) {
        // 如果值为空 则将整条属性替换为 ''
        return match.replace(subReg, option.value ? `${option.attr}="${option.value}"` : '')
      }
      //不包含option.attr属性,添加option.attr
      const prefix = match.slice(0, Math.max(0, tag.length + 1))
      let suffix = match.slice(tag.length + 2, match.length)
      suffix = suffix ? ` ${suffix}` : '>'
      return `${prefix} ${option.attr}="${option.value}"${suffix}`
    })
  }
  return tags.reduce((total, tag) => transform(total, tag), html)
}

/**
 * 移除所有标签的一个或多个属性
 * @param html html string
 * @param attr attr string
 * @returns html
 */
export const removeInnerHTMLAttribute = (html: string, attribute: string | string[]) => {
  return (isArray(attribute) ? attribute : [attribute]).reduce(
    (total, attribute) => total.replace(new RegExp(`${attribute}=['"](.*?)['"]`, 'gis'), ''),
    html
  )
}
