import { toNumber } from 'lodash'
import { makePhoneCall as h5MakePhoneCall } from '@tuimao/browser'
import { promisify, UNI_PLATFORM } from '../utils'

/**
 * 跳转查看地图(自动转换类型)
 * @param latitude 精度
 * @param longitude 维度
 */
export const openLocation = async (latitude: string | number, longitude: string | number) => {
  return promisify(uni.openLocation)({
    latitude: toNumber(latitude),
    longitude: toNumber(longitude)
  })
}
/**
 * 拨打电话
 * @param phoneNumber 电话号码
 */
export const makePhoneCall = (phoneNumber: string) => {
  if (UNI_PLATFORM === 'h5') {
    h5MakePhoneCall(phoneNumber)
  } else {
    uni.makePhoneCall({ phoneNumber })
  }
}
