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
