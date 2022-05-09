import { AxiosStatic, AxiosInstance, AxiosResponse } from 'axios'
import { isObject } from 'lodash'

export const axiosDataAssignResponse = (axios: AxiosStatic | AxiosInstance, expands: '*' | string[] = '*') => {
  const assign = (response: AxiosResponse, data: any) => {
    if (data && isObject(data) && !Array.isArray(data))
      if (expands === '*') Object.assign(response, data)
      // @ts-ignore
      else for (const key of expands) response[key] && (response[key] = data[key])
  }
  axios.interceptors.response.use(
    (response) => assign(response, response.data),
    (error) => {
      assign(error.response, error.response?.data)
      return Promise.reject(error)
    }
  )
}
