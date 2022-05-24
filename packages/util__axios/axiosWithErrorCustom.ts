import { AxiosError, AxiosStatic, AxiosInstance } from 'axios'

export const axiosWithErrorCustom = (axios: AxiosStatic | AxiosInstance, rejected: (error: AxiosError) => any) => {
  axios.interceptors.response.use(undefined, (error: AxiosError) => {
    if (error.config?.handleError !== false) {
      const result = rejected(error)
      if (result) return result
    }
    return Promise.reject(error)
  })
}
