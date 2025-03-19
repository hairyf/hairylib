// eslint-disable-next-line ts/ban-ts-comment
// @ts-nocheck
import type * as WxType from 'jweixin'

declare module 'jweixin' {
  type v4ApiMethod = 'updateTimelineShareData' | 'updateAppMessageShareData'
  export function config(config_: {
    debug?: boolean | undefined // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: string // 必填，公众号的唯一标识
    timestamp: number // 必填，生成签名的时间戳
    nonceStr: string // 必填，生成签名的随机串
    signature: string // 必填，签名，见附录1
    jsApiList: (WxType.ApiMethod | v4ApiMethod)[] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
  }): void
}

declare global {
  const wx: typeof WxType
}

export type WechatJssdkConfig = Omit<Parameters<typeof wx.config>[0], 'catch' | 'finally' | 'then'>

/** 初始化请求配置微信 jssdk wx.config 参数 */
export type WechatJssdkConfigFunction = () => WechatJssdkConfig | Promise<WechatJssdkConfig>

export interface WechatJssdkOptions {
  /**
   * 初始化请求配置
   */
  requestConfig: () => Promise<WechatJssdkConfig> | WechatJssdkConfig
  /**
   * 是否立即加载 config
   *
   * @default true
   */
  immediate?: boolean
  /**
   * wechat-jssdk 版本
   *
   * @default 1.3.0
   */
  version?: '1.2.0' | '1.3.0' | '1.4.0' | '1.5.0' | '1.6.0'
}
