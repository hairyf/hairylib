import { AxiosStatic, AxiosInstance, AxiosResponse, AxiosError } from 'axios'

declare module 'axios' {
  interface AxiosRequestConfig {
    preventError?: boolean
  }
}
interface AxiosErrorInterceptOptions {
  /** 自定义校验器 */
  validate: (response: AxiosResponse) => boolean | void
  /** 错误处理 */
  rejected: (error: AxiosError) => void
}
/**
 * axios 校验器
 * @param axios 实例
 * @param validate 自定义校验器
 * @param rejected 错误处理
 */
export const axiosErrorIntercept = (
  axios: AxiosStatic | AxiosInstance,
  validate: AxiosErrorInterceptOptions['validate'],
  rejected: AxiosErrorInterceptOptions['rejected']
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
        ...new Error('__axiosErrorIntercept__')
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
