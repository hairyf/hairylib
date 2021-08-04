import { AxiosStatic, AxiosInstance, AxiosResponse, AxiosError } from 'axios'
interface AxiosValidateOpts {
  /** 自定义校验器 */
  validate: (response: AxiosResponse) => boolean | void
  /** 错误处理 */
  rejected: (error: AxiosError) => void
}
/**
 * axios 校验器
 * @param axios 实例
 * @param validate 校验器
 * @param rejected 错误处理
 */
export const axiosValidate = (
  axios: AxiosStatic | AxiosInstance,
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
