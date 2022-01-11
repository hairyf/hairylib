import { AxiosStatic, AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

type AxiosLoadingShowCallback = (config: AxiosRequestConfig) => void
type AxiosLoadingCloseCallback = (
  config: AxiosRequestConfig,
  result: [AxiosResponse?, AxiosError?]
) => void

interface AxiosLoadingOptions {
  /**
   * @description 当 config 某个字段的值存在时, 调用 loading 拦截
   * @default loading
   */
  fieldName?: string
}

/**
 * axios 全局加载提示
 * @param axios 实例
 * @param show 展示逻辑钩子
 * @param clone 关闭逻辑钩子
 */
export const axiosLoading = (
  axios: AxiosStatic | AxiosInstance,
  show: AxiosLoadingShowCallback,
  close: AxiosLoadingCloseCallback,
  options: AxiosLoadingOptions = {}
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
        !subscribers && close(response.config, [response])
      }
      return response
    },
    (error) => {
      if (isLoading(error.config)) {
        subscribers--
        !subscribers && close(error.config, [undefined, error])
      }
      return Promise.reject(error)
    }
  )
}
