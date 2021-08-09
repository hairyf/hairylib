/*
 * @Author: Mr.Mao
 * @Date: 2021-08-03 14:03:00
 * @LastEditTime: 2021-08-03 15:10:12
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */

export * from './is'
import { forIn, pickBy, isObject, isPlainObject } from 'lodash'

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
 * 自定义 Promise 等待
 * @param code 等待时间
 */
export const awaitPromise = (code = 1000) => {
  return new Promise((resolve) => setTimeout(resolve, code))
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
 * 根据过滤返回对应数据
 * @param params
 * @param filters
 */
export const pickByParams = <T extends object>(params: T, filters: any[], deep = false) => {
  deep &&
    forIn(params, (val, key) => {
      if (isObject(val))
        // @ts-ignore
        params[key] = pickByParams(params[key], filters, deep)
    })
  const pickValue = pickBy(params, (value) => !filters.some((v) => value === v))
  if (Array.isArray(params)) {
    return Object.values(pickValue) as any as Partial<T>
  }
  return pickValue
}

/**
 * 将 formData 转换为 ojbect
 * @param formData
 */
export const formDataToObject = (formData: FormData) => {
  return Object.fromEntries((formData as any).entries()) as Record<string, string>
}
/**
 * 将 object 转换为 formData
 * @param object
 */
export const objectToFormData = (object: Record<string, string>) => {
  const formData = new FormData()
  for (const [key, value] of Object.entries(object)) {
    formData.append(key, value)
  }
  return formData
}

/**
 * 对对象进行扁平化
 * @param object 对象
 * @param deep 深度
 */
export const objectFlat = (object: Record<string, any>, deep = 1) => {
  const flatDeep = (object: Record<string, any>, deep = 1) => {
    let _object: Record<string, any> = {}
    for (const [key, value] of Object.entries(object)) {
      if (isPlainObject(value)) {
        _object = { ..._object, ...(deep > 0 ? flatDeep(value, deep - 1) : value) }
        continue
      }
      _object[key] = value
    }
    return _object
  }
  return flatDeep(object, deep)
}
