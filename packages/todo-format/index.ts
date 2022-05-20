import { isArray, camelCase } from 'lodash-es'
import dayjs from 'dayjs'

/**
 * 替换 html string 中任意 tag 内任意 attr 值
 * @param html html string
 * @param option
 * @returns
 */
export const replaceInnerHTMLAttributes = (
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
      return replaceInnerHTMLAttributes(old, { ...option, attr: item })
    }, html)
    return string_
  }
  const tags = Array.isArray(option.tag) ? option.tag : [option.tag]
  const transform = (html: string, tag: string) => {
    // 需找带指定属性的标签 > 一行代码
    const replaceReg = new RegExp('<' + tag + '[^>]*(' + option.attr + '=[\'"](.*?)[\'"])?[^>]*>', 'gi')
    // 选择对应属性的字符  attr='***' | attr="***"
    const subReg = new RegExp(`${option.attr}=['"](.*?)['"]`, 'gis')
    return html.replace(replaceReg, (match) => {
      // 包含option.attr属性,替换option.attr
      if (match.indexOf(option.attr as string) > 0) {
        // 如果值为空 则将整条属性替换为 ''
        return match.replace(subReg, option.value ? `${option.attr}="${option.value}"` : '')
      }
      // 不包含option.attr属性,添加option.attr
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

/**
 * 格式化剔除字符串代码字段
 * @param str 字符串
 * @returns 剔除字符串
 */
export const formatClearHtml = (string_: string) => string_.replace(/<[!/]*[^<>]*>/gi, '')

/**
 * 格式化为价格(两位小数点)
 * @param value 传入字符
 */
export const formatPrice = (value: string) => {
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
 * 格式化为正整数
 * @param value 传入字符
 */
export const formatInteger = (value: string) => {
  return value.replace(/^(0+)|\D+/g, '')
}

/**
 * 格式化数字千位分隔符
 * @param number_ 数值
 * @param unit 单位
 */
export const formatThousandBitSeparator = (target: number | string, unit = ',') => {
  if (target === '') return ''
  const part = String(target).split('.')
  for (let index = 0; index < part.length; index++) {
    part[index] = part[index].replace(new RegExp('(\\d)(?=(\\d{3})+$)', 'ig'), `$1${unit || ''}`)
  }
  return part.join('.')
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
 * 隐藏手机号中间四位
 * @param phone 手机号
 */
export const formatCoverPhone = (phone: string) => {
  return phone.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
}

/**
 * 数字位数不够时，进行前补零
 * @param num 数值
 * @param lh 长度
 */
export const prefixZero = (number_: number, lh = 2) => {
  return (new Array(lh).join('0') + number_).slice(-lh)
}

/**
 * 转换大写驼峰
 * @param str
 */
export const capitalizeCamelCase = (string_: string) => {
  let result = camelCase(string_)
  result = result.slice(0, 1).toLocaleUpperCase() + result.slice(1)
  return result
}
