/*
 * @Author: Mr.Mao
 * @Date: 2021-06-28 16:37:00
 * @LastEditTime: 2021-06-28 16:51:21
 * @Description: 浏览器工具
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */

declare const WXEnvironment: any;
export const isBrowser = typeof window !== 'undefined'
export const isWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform
export const weexPlatform = isWeex && WXEnvironment.platform.toLowerCase()
export const UA = isBrowser && window.navigator.userAgent.toLowerCase()
export const isIE = UA && /msie|trident/.test(UA)
export const isIE9 = UA && UA.indexOf('msie 9.0') > 0
export const isIE11 = navigator.userAgent.indexOf('Trident') > -1 && navigator.userAgent.indexOf('rv:11.0') > -1
export const isEdge = UA && UA.indexOf('edge/') > 0
export const isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android')
export const isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios')
export const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge
export const isPhantomJS = UA && /phantomjs/.test(UA)
export const isFF = UA && UA.match(/firefox\/(\d+)/)

/**
 * 判断该类名存不存在
 * @param el 判断元素
 * @param className 类名
 * @returns 是否存在
 */
export const isClassName = (el: HTMLElement, className: string) => {
  return el.className.indexOf(className) !== -1;
}
/**
 * 跳转到新的页面
 * @param url 跳转url
 */
export const ejectWindow = (url: string) => {
  const a = document.createElement('a')
  a.href = url
  a.target = "_blank"
  a.click()
}
/**
 * 动态设置HTML标签图标
 * @param path 图标路径
 */
export const setHtmlIconLink = (path: string) => {
  const link = document.querySelector<HTMLLinkElement>('#icon-link')
  if (!link) return false
  link.type = 'image/x-icon'
  link.rel = 'shortcut icon'
  link.href = path
  document.getElementsByTagName('head')[0].appendChild(link)
}
/**
 * 选择多个图片
 * @param option
 * @returns FileList
 */
 export const selectImages = () => {
  return new Promise<File[]>((resolve, reject) => {
    const inputEl = document.createElement('input')
    inputEl.type = 'file'
    inputEl.multiple = true
    inputEl.accept = 'image/jpeg,image/x-png,image/gif'
    inputEl.click()
    const timer = setTimeout(reject, 20 * 1000)
    inputEl.addEventListener('change', function () {
      if (this.files) {
        resolve(Object.values(this.files))
        clearTimeout(timer)
      }
    })
  })
}
/**
 * 下载文件
 * @param url 下载地址
 * @param fileName 文件名称
 */
 export const downloadFile = (url: string, fileName?: string) => {
  const a = document.createElement('a')
  fileName && (a.download = fileName)
  a.href = url
  a.click()
}