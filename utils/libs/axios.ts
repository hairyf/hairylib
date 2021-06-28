/*
 * @Author: Mr.Mao
 * @Date: 2021-06-28 16:53:00
 * @LastEditTime: 2021-06-28 18:13:00
 * @Description: 
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import { AxiosStatic, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios"
import { debounce, DebounceSettings } from "lodash"
declare module 'axios' {
  interface AxiosRequestConfig {
    loading?: boolean
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
  validate: (config: AxiosRequestConfig, result: [AxiosResponse?, AxiosError?]) => boolean | void
  /** 错误处理 */
  rejected: (error: AxiosError) => void
}

/**
 * axios 全局加载提示
 * @param axios 实例
 * @param show 展示逻辑钩子
 * @param clone 关闭逻辑钩子
 */
export const axiosLoading = (axios: AxiosStatic, show: AxiosLoadingOpts['show'], clone: AxiosLoadingOpts['clone']) => {
  axios.interceptors.request.use((config) => {
    if (config.loading) {
      show(config)
    }
    return config
  })
  axios.interceptors.response.use(
    (response) => {
      if (response.config.loading) {
        clone(response.config, [response])
      }
      return response
    },
    (error) => {
      if (error.config?.loading) {
        clone(error.config, [, error])
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
export const axiosValidate = (axios: AxiosStatic, validate: AxiosValidateOpts['validate'], rejected: AxiosValidateOpts['rejected']) => {
  const onFulfilled = (response: AxiosResponse) => {
    const validateResult = validate(response.config, [response])
    const isError = typeof validateResult == 'boolean' && !validateResult
    if (isError) {
      rejected({
        ...response,
        response: response,
        isAxiosError: false,
        toJSON: () => ({}),
        ...new Error()
      })
      return Promise.reject(response)
    }
    return response
  }
  const onRejected = (error: AxiosError) => {
    rejected(error)
    return Promise.reject(error)
  }
  axios.interceptors.response.use(
    onFulfilled,
    onRejected
  )
}

/**
 * 创建防抖错误处理函数
 * @param wait 
 * @param option 
 */
export const createDebounceErr = (wait?: number, option?: DebounceSettings) => {
  const debounceFun = debounce(
    (cb: any) => cb(),
    wait || 500,
    option || { leading: true, trailing: false }
  )

  const debounceErr = <T extends Function>(callback: T) => {
    const deb = (...args: any[]) => {
      debounceFun(() => callback(...args))
    }
    return deb as any as T
  }
  return debounceErr
}
