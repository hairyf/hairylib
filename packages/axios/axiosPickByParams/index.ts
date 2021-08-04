import { AxiosStatic, AxiosInstance } from 'axios'
import { isPlainObject } from 'lodash-es'
import { formDataToObject, isFormData, objectToFormData, pickByParams } from '@tuimao/core'

interface AxiosPickByParamsOptions {
  /** 是否过滤请求头, 默认 false */
  header?: boolean
  /** 是否过滤请求体, 默认 true */
  data?: boolean
  /** 是否过滤请求参数, 默认 true */
  params?: boolean
  /** 是否过滤表单数据, 默认 true */
  formData?: boolean
  /** 是否深层过滤, 默认 false */
  deep?: boolean
}
/**
 * 根据过滤器, 过滤 body|params 参数
 * @param axios 实例
 * @param filters 过滤参数
 */
export const axiosPickByParams = (
  axios: AxiosStatic | AxiosInstance,
  filters: any[],
  option: AxiosPickByParamsOptions = {}
) => {
  const { header = false, data = true, params = true, deep = false, formData = true } = option
  axios.interceptors.request.use((config) => {
    if (header && isPlainObject(config.headers)) {
      config.headers = pickByParams(config.headers, filters, deep)
    }
    if (params && isPlainObject(config.params)) {
      config.params = pickByParams(config.params, filters, deep)
    }
    if (data && isPlainObject(config.data)) {
      config.data = pickByParams(config.data, filters, deep)
    }
    if (formData && isFormData(config.data)) {
      const transformObject = formDataToObject(config.data)
      const pickByObject = pickByParams(transformObject, filters)
      config.data = objectToFormData(<Record<string, string>>pickByObject)
    }
    return config
  })
}
