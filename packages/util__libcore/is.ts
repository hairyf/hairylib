import _isObject from 'lodash/isObject'

declare const WXEnvironment: any

export const isBrowser = typeof window !== 'undefined'

export const isWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform

export const weexPlatform = isWeex && WXEnvironment.platform.toLowerCase()

export const UA = isBrowser && window.navigator.userAgent.toLowerCase()

export const isIE = UA && /msie|trident/.test(UA)

export const isIE9 = UA && UA.indexOf('msie 9.0') > 0

export const isIE11 = isBrowser && navigator.userAgent.includes('Trident') && navigator.userAgent.includes('rv:11.0')

export const isEdge = UA && UA.indexOf('edge/') > 0

export const isAndroid = (UA && UA.indexOf('android') > 0) || weexPlatform === 'android'

export const isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || weexPlatform === 'ios'

export const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge

export const isPhantomJS = UA && /phantomjs/.test(UA)

export const isFF = typeof UA == 'string' && UA.match(/firefox\/(\d+)/)

export const isMobile = isBrowser && navigator.userAgent.toLowerCase().includes('mobile')

export const isFormData = (value: any): value is FormData => isObject(value) && value instanceof FormData

export const isWindow = (value: any): value is Window =>
  typeof window !== 'undefined' && toString.call(value) === '[object Window]'

export const isObject = (value: any): value is object => _isObject(value) && !Array.isArray(value)
