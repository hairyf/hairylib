import { makePhoneCall as h5MakePhoneCall } from '@hairy/browser'
import { UNI_PLATFORM } from '../utils'

/**
 * 修复 uni api
 * @fix makePhoneCall
 * @fix setClipboardData
 */
export const uniApiFix = () => {
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
