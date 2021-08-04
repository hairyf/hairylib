/*
 * @Author: Mr.Mao
 * @Date: 2021-07-30 17:39:05
 * @LastEditTime: 2021-08-03 15:06:54
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
/**
 * 获取数据类型
 * @param target 检测对象
 * @returns 返回字符串
 */
export const checkedTypeof = (target: any): string => {
  return Object.prototype.toString.call(target).slice(8, -1)
}

/**
 * 不符合预期则弹出警告
 * @param condition
 * @param infos
 */
export const assert = (condition: boolean, ...infos: any[]) => {
  // eslint-disable-next-line no-console
  if (!condition) console.warn(...infos)
  return condition
}

export const isClient = typeof window !== 'undefined'
export const isBoolean = (val: any): val is boolean => typeof val === 'boolean'
export const isFunction = <T extends Function>(val: any): val is T => typeof val === 'function'
export const isNumber = (val: any): val is number => typeof val === 'number'
export const isString = (val: unknown): val is string => typeof val === 'string'
export const isObject = (val: any): val is object => toString.call(val) === '[object Object]'
export const isArray = (val: any): val is any[] => Array.isArray(val)
export const isWindow = (val: any): val is Window =>
  typeof window !== 'undefined' && toString.call(val) === '[object Window]'
