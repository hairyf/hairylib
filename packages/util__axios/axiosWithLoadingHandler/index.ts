import { AxiosStatic, AxiosInstance, AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios'

export interface AxiosWithLoadingOptions {
  /**
   * @description 当 config 某个字段的值存在时, 调用 loading 拦截
   * @default loading
   */
  fieldName?: string
}

export type LoadingShowCallback = (config: AxiosRequestConfig) => void
export type LoadingHideCallback = (config: AxiosRequestConfig, response?: AxiosResponse, error?: AxiosError) => void
/**
 * axios 全局加载提示
 * @param axios 实例
 * @param show 展示逻辑钩子
 * @param hide 关闭逻辑钩子
 */
export const axiosWithLoadingHandler = (
  axios: AxiosStatic | AxiosInstance,
  show: LoadingShowCallback,
  hide: LoadingHideCallback,
  options: AxiosWithLoadingOptions = {}
) => {
  let subscribers = 0
  const fieldName = options.fieldName || 'loading'
  const isLoading = (config: any): boolean => !!config?.[fieldName]
  axios.interceptors.request.use((config) => {
    if (isLoading(config)) {
      !subscribers && show(config)
      subscribers++
    }
    return config
  })
  axios.interceptors.response.use(
    (response) => {
      if (isLoading(response.config)) {
        subscribers--
        !subscribers && hide(response.config, response)
      }
      return response
    },
    (error) => {
      if (isLoading(error.config)) {
        subscribers--
        !subscribers && hide(error.config, undefined, error)
      }
      return Promise.reject(error)
    }
  )
}

declare module 'axios' {
  interface AxiosRequestConfig {
    loading?: boolean
  }
}
