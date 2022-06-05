import delay from 'delay'
import pPipe from 'p-pipe'
import { PipeFn, ComposeFn } from 'pipe-and-compose-types'
import { isTypeof } from '../typeof'

export const pipe: PipeFn = (...fns) => fns.reduce((v, f) => f(v)) as any
export const compose: ComposeFn = (...fns) => fns.reduceRight((v, f) => f(v)) as any
export { delay, pPipe }

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

/**
 * 生成区间数组
 * arange(<start>, <stop>, [step=1], [target=[]], [at])
 */
export const arange = (x1: number, x2?: number, stp = 1, z: number[] = [], z0 = z.length) => {
  if (!x2) x1 -= x2 = x1
  for (let z1 = z0 + Math.max(Math.ceil((++x2 - x1) / stp), 0); z0 < z1; x1 += stp) z[z0++] = x1
  return z
}
