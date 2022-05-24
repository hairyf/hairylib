import { AxiosStatic, AxiosInstance, AxiosResponse } from 'axios'
import { isObject } from '@hairy/libcore'

/**
 * 根据 expands 规则合并 response 和 data
 * @param axios
 * @param expands
 */
export const axiosWithAssignResponse = (axios: AxiosStatic | AxiosInstance, expands: '*' | string[] = '*') => {
  const extend = (target: any, source: any, key: string) => {
    source[key] && (target[key] = source[key])
  }
  const assign = (response: AxiosResponse, data: any) => {
    if (data && isObject(data) && !Array.isArray(data))
      if (expands === '*') {
        for (const key of Object.keys(data)) extend(response, data, key)
      } else {
        for (const key of expands) extend(response, data, key)
      }
  }
  axios.interceptors.response.use(
    (response) => {
      assign(response, response.data)
      return response
    },
    (error) => {
      assign(error.response, error.response?.data)
      return Promise.reject(error)
    }
  )
}
