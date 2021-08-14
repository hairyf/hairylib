import { makePhoneCall as h5MakePhoneCall } from '@tuimao/browser'
import { UNI_PLATFORM } from '../utils'

/** fix uni.makePhoneCall h5 error */
uni.makePhoneCall = (options) => {
  try {
    if (UNI_PLATFORM === 'h5') {
      h5MakePhoneCall(options.phoneNumber)
      options.success?.(undefined)
    } else {
      uni.makePhoneCall(options)
    }
  } catch (error) {
    options.fail?.(error)
  }
}
