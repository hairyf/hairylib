/*
 * @Author: Mr.Mao
 * @Date: 2021-08-03 13:57:13
 * @LastEditTime: 2021-08-06 11:56:53
 * @Description:
 * @LastEditors: Zhilong
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import dayjs from 'dayjs'

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
 */
export const formatCoverPhone = (phone: string) => {
  return phone.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
}
/**
 * 数字位数不够，进行前补零
 * @param num 数值
 * @param lh 长度
 */
export const prefixZero = (number_: number, lh = 2) => {
  return (new Array(lh).join('0') + number_).slice(-lh)
}
