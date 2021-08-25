import { makePhoneCall as h5MakePhoneCall } from '@tuimao/browser'
import { UNI_PLATFORM } from '../utils'

/**
 * 修复 uni api
 * @fix makePhoneCall
 * @fix setClipboardData
 */
export const uApiFixs = () => {
  uni.makePhoneCall = (options) => {
    try {
      if (UNI_PLATFORM === 'h5') {
        h5MakePhoneCall(options.phoneNumber)
        options.success?.(undefined)
        options.complete?.(undefined)
      } else {
        uni.makePhoneCall(options)
      }
    } catch (error) {
      options.fail?.(error)
    }
  }
  uni.setClipboardData = (options) => {
    try {
      if (UNI_PLATFORM === 'h5') {
        navigator.clipboard.writeText(options.data).then(options.success).catch(options.fail)
        options.complete?.(undefined)
      } else {
        uni.setClipboardData(options)
      }
    } catch (error) {
      options.fail?.(error)
    }
  }
}

/**
 * 查询 fields 信息
 * @param selector
 * @param componentThis
 * @param options
 * @returns
 */
export const queryFields = (selector: string, componentThis?: any, options?: UniApp.NodeField) => {
  const query = componentThis
    ? uni.createSelectorQuery().in(componentThis)
    : uni.createSelectorQuery()
  return new Promise<UniApp.NodeInfo>((resolve) => {
    query
      .select(selector)
      .fields(options || {}, resolve)
      .exec()
  })
}
