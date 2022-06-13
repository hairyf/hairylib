import { AxiosError, AxiosStatic, AxiosInstance } from 'axios'

export const axiosWithErrorHelper = (axios: AxiosStatic | AxiosInstance, rejected: (error: AxiosError) => any) => {
  axios.interceptors.response.use(undefined, (error: AxiosError) => {
    if (error.config?.handleError !== false) {
      const result = rejected(error)
      if (result) return result
    }
    return Promise.reject(error)
  })
}
declare module 'axios' {
  interface AxiosRequestConfig {
    handleError?: boolean
  }
}
