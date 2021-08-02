/*
 * @Author: Mr.Mao
 * @Date: 2021-06-28 16:53:00
 * @LastEditTime: 2021-07-18 15:00:53
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import { AxiosStatic, AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { pickByParams } from '../common'

declare module 'axios' {
  interface AxiosRequestConfig {
    loading?: boolean
    preventError?: boolean
  }
}

interface AxiosLoadingOpts {
  /** 加载调起 */
  show: (config: AxiosRequestConfig) => void
  /** 加载关闭 */
  clone: (config: AxiosRequestConfig, result: [AxiosResponse?, AxiosError?]) => void
}

interface AxiosValidateOpts {
  /** 自定义校验器 */
  validate: (response: AxiosResponse) => boolean | void
  /** 错误处理 */
  rejected: (error: AxiosError) => void
}

type HttpInstance = AxiosStatic | AxiosInstance

/**
 * axios 全局加载提示
 * @param axios 实例
 * @param show 展示逻辑钩子
 * @param clone 关闭逻辑钩子
 */
export const axiosLoading = (
  axios: HttpInstance,
  show: AxiosLoadingOpts['show'],
  clone: AxiosLoadingOpts['clone']
) => {
  let requestCount = 0
  axios.interceptors.request.use((config) => {
    if (config.loading) {
      !requestCount && show(config)
      requestCount++
    }
    return config
  })
  axios.interceptors.response.use(
    (response) => {
      if (response.config.loading) {
        setTimeout(() => {
          requestCount--
          !requestCount && clone(response.config, [response])
        }, 100)
      }
      return response
    },
    (error) => {
      if (error.config?.loading) {
        setTimeout(() => {
          requestCount--
          !requestCount && clone(error.config, [undefined, error])
        }, 100)
      }
      return error
    }
  )
}

/**
 * axios 校验器
 * @param axios 实例
 * @param validate 校验器
 * @param rejected 错误处理
 */
export const axiosValidate = (
  axios: HttpInstance,
  validate: AxiosValidateOpts['validate'],
  rejected: AxiosValidateOpts['rejected']
) => {
  const onFulfilled = (response: AxiosResponse) => {
    const validateResult = validate(response)
    const isError = typeof validateResult == 'boolean' && !validateResult
    if (isError) {
      rejected({
        ...response,
        response,
        isAxiosError: false,
        toJSON: () => ({}),
        ...new Error()
      })
      return Promise.reject(response)
    }
    return response
  }
  const onRejected = (error: AxiosError) => {
    !error.config.preventError && rejected(error)
    return Promise.reject(error)
  }
  axios.interceptors.response.use(onFulfilled, onRejected)
}

/**
 * 根据过滤器, 过滤 body|params 参数
 * @param axios 实例
 * @param filters 过滤参数
 */
export const axiosPickByParams = (axios: HttpInstance, filters: any[]) => {
  axios.interceptors.request.use((config) => {
    if (config.data?.constructor === Object) {
      config.data = pickByParams(config.data, filters)
    }
    if (config.params?.constructor === Object) {
      config.params = pickByParams(config.params, filters)
    }
    return config
  })
}
