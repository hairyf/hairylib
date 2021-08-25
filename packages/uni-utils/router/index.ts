import { urlParamsAnaly } from '@tuimao/core'
/** uniapp 路由跳转封装 */
export const navigateTo = (url: string, params: Record<string, any> = {}) => {
  uni.navigateTo({ url: urlParamsAnaly(url, params) })
}
/** uniapp 路由跳转封装 */
export const reLaunch = (url: string, params: Record<string, any> = {}) => {
  uni.reLaunch({ url: urlParamsAnaly(url, params) })
}
/** uniapp 路由跳转封装 */
export const switchTab = (url: string, params: Record<string, any> = {}) => {
  uni.switchTab({ url: urlParamsAnaly(url, params) })
}
/** uniapp 路由跳转封装 */
export const redirectTo = (url: string, params: Record<string, any> = {}) => {
  uni.redirectTo({ url: urlParamsAnaly(url, params) })
}
/** uniapp 路由跳转封装 */
export const navigateBack = (delta = 1) => {
  uni.navigateBack({ delta })
}
