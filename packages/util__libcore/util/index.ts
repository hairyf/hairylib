import delay from 'delay'
import { isTypeof } from '../typeof'
/**
 * 地址参数设置
 * @param url 传入url
 * @param params 请求参数
 * @returns 拼接url
 */
export const setQueryParams = (url: string, params: Record<string, any>) => {
  const queryString = Object.keys(params).map((key) => {
    return isTypeof(params[key], 'boolean') ? key : `${key}=${params[key]}`
  })
  if (queryString.length > 0) url += '?' + queryString.join('&')
  return url
}

export { delay }
