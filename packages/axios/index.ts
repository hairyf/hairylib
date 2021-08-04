/*
 * @Author: Mr.Mao
 * @Date: 2021-06-28 16:53:00
 * @LastEditTime: 2021-08-03 15:11:49
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */

export * from './axiosValidate'

import { AxiosStatic, AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { isPlainObject } from 'lodash-es'
import { formDataToObject, objectToFormData, pickByParams } from '@tuimao/core'

declare module 'axios' {
  interface AxiosRequestConfig {
    loading?: boolean
    preventError?: boolean
  }
}

type HttpInstance = AxiosStatic | AxiosInstance

interface AxiosPickByParamsOptions {
  /** 是否过滤请求头, 默认 false */
  header?: boolean
  /** 是否过滤请求体, 默认 true */
  data?: boolean
  /** 是否过滤请求参数, 默认 true */
  params?: boolean
  /** 是否深层过滤, 默认 false */
  deep?: boolean
}
/**
 * 根据过滤器, 过滤 body|params 参数
 * @param axios 实例
 * @param filters 过滤参数
 */
export const axiosPickByParams = (
  axios: HttpInstance,
  filters: any[],
  option: AxiosPickByParamsOptions = {}
) => {
  const { header = false, data = true, params = true, deep = false } = option
  axios.interceptors.request.use((config) => {
    if (header) {
      if (isPlainObject(config.headers))
        config.headers = pickByParams(config.headers, filters, deep)
    }
    if (params) {
      if (isPlainObject(config.params)) config.params = pickByParams(config.params, filters, deep)
    }
    if (data) {
      if (isPlainObject(config.data)) config.data = pickByParams(config.data, filters, deep)
      if (config.data instanceof FormData) {
        const transformObject = formDataToObject(config.data)
        const pickByObject = pickByParams(transformObject, filters)
        config.data = objectToFormData(<Record<string, string>>pickByObject)
      }
    }
    return config
  })
}
