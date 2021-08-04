/*
 * @Author: Mr.Mao
 * @Date: 2021-08-03 15:13:21
 * @LastEditTime: 2021-08-03 15:13:33
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
declare const WXEnvironment: any
export const isBrowser = typeof window !== 'undefined'
export const isWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform
export const weexPlatform = isWeex && WXEnvironment.platform.toLowerCase()
export const UA = isBrowser && window.navigator.userAgent.toLowerCase()
export const isIE = UA && /msie|trident/.test(UA)
export const isIE9 = UA && UA.indexOf('msie 9.0') > 0
export const isIE11 =
  navigator.userAgent.indexOf('Trident') > -1 && navigator.userAgent.indexOf('rv:11.0') > -1
export const isEdge = UA && UA.indexOf('edge/') > 0
export const isAndroid = (UA && UA.indexOf('android') > 0) || weexPlatform === 'android'
export const isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || weexPlatform === 'ios'
export const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge
export const isPhantomJS = UA && /phantomjs/.test(UA)
export const isFF = typeof UA == 'string' && UA.match(/firefox\/(\d+)/)
