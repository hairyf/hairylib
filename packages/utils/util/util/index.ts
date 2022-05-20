/*
 * @Author: Mr.Mao
 * @Date: 2021-08-03 14:03:00
 * @LastEditTime: 2021-08-16 14:58:19
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */

/**
 * 地址参数计算
 * @param url 传入url
 * @param params 请求参数
 * @returns 拼接url
 */
export const urlParamsAnaly = (url: string, params: Record<string, any>) => {
  const queryString = Object.keys(params).map((key) => `${key}=${params[key]}`)
  if (queryString.length > 0) url += '?' + queryString.join('&')
  return url
}

/**
 * 自定义 Promise 等待
 * @param code 等待时间
 */
export const awaitPromise = (ms = 1000) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
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
  return [...new Array(end + 1).keys()].slice(start)
}

/**
 * 获取数据类型
 * @param target 检测对象
 * @returns 返回字符串
 */
export const checkedTypeof = (target: any) => {
  const value = Object.prototype.toString.call(target).slice(8, -1).toLocaleLowerCase()
  return value as 'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'function' | 'null' | 'regexp'
}

/**
 * 不符合预期则弹出警告
 * @param condition
 * @param infos
 */
export const assert = (condition: boolean, ...infos: any[]) => {
  if (!condition) console.warn(...infos)
  return condition
}
