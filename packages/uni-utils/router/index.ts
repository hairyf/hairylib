import { paramsAnaly } from '@tuimao/core'
/** uniapp 路由跳转封装 */
export const navigateTo = (url: string, params: Record<string, any> = {}) => {
  uni.navigateTo({ url: paramsAnaly(url, params) })
}
/** uniapp 路由跳转封装 */
export const reLaunch = (url: string, params: Record<string, any> = {}) => {
  uni.reLaunch({ url: paramsAnaly(url, params) })
}
/** uniapp 路由跳转封装 */
export const switchTab = (url: string, params: Record<string, any> = {}) => {
  uni.switchTab({ url: paramsAnaly(url, params) })
}
/** uniapp 路由跳转封装 */
export const redirectTo = (url: string, params: Record<string, any> = {}) => {
  uni.redirectTo({ url: paramsAnaly(url, params) })
}
/** uniapp 路由跳转封装 */
export const navigateBack = (delta = 1) => {
  uni.navigateBack({ delta })
}
