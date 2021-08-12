/*
 * @Author: Zhilong
 * @Date: 2021-08-06 09:58:10
 * @LastEditTime: 2021-08-06 10:46:37
 * @Description:
 * @LastEditors: Zhilong
 * @autograph: ⚠ warning!  ⚠ warning!  ⚠ warning!   ⚠野生的页面出现了!!
 */
import { AxiosStatic, AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

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

/**
 * axios 全局加载提示
 * @param axios 实例
 * @param show 展示逻辑钩子
 * @param clone 关闭逻辑钩子
 */
export const axiosLoading = (
  axios: AxiosStatic | AxiosInstance,
  show: AxiosLoadingOpts['show'],
  clone: AxiosLoadingOpts['clone']
) => {
  let subscribers = 0
  axios.interceptors.request.use((config) => {
    if (config.loading) {
      !subscribers && show(config)
      subscribers++
    }
    return config
  })
  axios.interceptors.response.use(
    (response) => {
      if (response.config.loading) {
        subscribers--
        !subscribers && clone(response.config, [response])
      }
      return response
    },
    (error) => {
      if (error.config?.loading) {
        subscribers--
        !subscribers && clone(error.config, [undefined, error])
      }
      return error
    }
  )
}
