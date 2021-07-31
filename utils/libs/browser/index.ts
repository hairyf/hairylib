/*
 * @Author: Mr.Mao
 * @Date: 2021-06-28 16:37:00
 * @LastEditTime: 2021-07-31 15:15:26
 * @Description: 浏览器工具
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */

import { blendColor, hexToRgba } from '../common'

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

export * from './files'
/**
 * 跳转到新的页面
 * @param url 跳转url
 */
export const ejectWindow = (url: string) => {
  const a = document.createElement('a')
  a.href = url
  a.target = '_blank'
  a.click()
}
/**
 * 根据颜色融合出黑色与白色, 透明度色
 * @param color
 * @returns
 */
export const fuseThemeColor = (color: string) => ({
  'primaryColorLight-2': blendColor('#ffffff', color, 0.8),
  'primaryColorLight-4': blendColor('#ffffff', color, 0.6),
  'primaryColorLight-6': blendColor('#ffffff', color, 0.4),
  'primaryColorLight-8': blendColor('#ffffff', color, 0.2),

  'primaryColorDark-2': blendColor('#000000', color, 0.8),
  'primaryColorDark-4': blendColor('#000000', color, 0.6),
  'primaryColorDark-6': blendColor('#000000', color, 0.4),
  'primaryColorDark-8': blendColor('#000000', color, 0.2),

  'primaryColorOpacity-2': hexToRgba(color, 0.8).rgba,
  'primaryColorOpacity-4': hexToRgba(color, 0.6).rgba,
  'primaryColorOpacity-6': hexToRgba(color, 0.4).rgba,
  'primaryColorOpacity-8': hexToRgba(color, 0.2).rgba
})
