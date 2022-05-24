import { AxiosStatic, AxiosInstance } from 'axios'
import { isObject } from '@hairy/libcore'

/**
 * 请求时携带一些参数
 * @param axios
 * @param params
 * @param mode
 */
export const axiosWithExtraParams = (
  axios: AxiosStatic | AxiosInstance,
  params: object,
  mode: '*' | 'params' | 'data' | 'headers' = '*'
) => {
  axios.interceptors.request.use((config) => {
    const assign = (path: keyof typeof config) => {
      if (!isObject(config[path])) return
      config[path] = { ...params, ...config[path] }
    }
    if (mode === '*') {
      assign('params')
      assign('data')
      assign('headers')
    }
    if (mode === 'params') assign('params')
    if (mode === 'data') assign('data')
    if (mode === 'headers') assign('headers')
    return config
  })
}
