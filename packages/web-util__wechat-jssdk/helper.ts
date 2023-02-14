import * as WxType from 'jweixin'
import { loadScript } from './internal/load_script'

declare module 'jweixin' {
  type v4ApiMethod = 'updateTimelineShareData' | 'updateAppMessageShareData'
  export function config(config_: {
    debug?: boolean | undefined // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: string // 必填，公众号的唯一标识
    timestamp: number // 必填，生成签名的时间戳
    nonceStr: string // 必填，生成签名的随机串
    signature: string // 必填，签名，见附录1
    jsApiList: (WxType.ApiMethod & v4ApiMethod)[] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
  }): void
}

declare const wx: typeof WxType

export type WechatJssdkConfig = Omit<Parameters<typeof wx.config>[0], 'catch' | 'finally' | 'then'>

/** 初始化请求配置微信 jssdk wx.config 参数 */
export type WechatJssdkConfigFunction = () => WechatJssdkConfig | Promise<WechatJssdkConfig>
export interface WechatJssdkOptions {
  /**
   * 初始化请求配置
   */
  requestConfig: () => Promise<WechatJssdkConfig>
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

/**
 * jssdk 的前置处理类
 * @constructor 加载配置（apiHost，appId，config，version，jssdk）
 * @function implement 提供 wxApi 执行器（等待 config 与 ready 结束，在调用 api）
 * @function config 加载配置，提供 promise 式返回
 * @function ready wx.rady，提供 promise 式返回
 */
export class WechatJssdkHelper {
  private version: string

  private isReady = false

  private requestConfig: () => Promise<WechatJssdkConfig>

  private loadPromise?: Promise<void>
  private configPromise?: Promise<void>
  private readyPromise?: Promise<void>

  private loadJssdk() {
    const scriptUrl = `https://res.wx.qq.com/open/js/jweixin-${this.version}.js`
    this.loadPromise = loadScript(scriptUrl).then(() => {
      this.loadPromise = undefined
    })
  }

  constructor(options: WechatJssdkOptions) {
    const { immediate = true, version, requestConfig } = options

    this.version = version || '1.3.0'
    this.requestConfig = requestConfig

    this.loadJssdk()

    if (immediate) this.config()
  }

  async config() {
    if (this.configPromise) return this.configPromise

    if (this.loadPromise) await this.loadPromise

    this.configPromise = (async () => {
      wx.config(await this.requestConfig())
    })()

    return this.configPromise
  }
  async ready() {
    if (this.readyPromise) return this.readyPromise

    if (this.loadPromise) await this.loadPromise

    if (this.isReady) return

    this.readyPromise = new Promise<void>((resolve, reject) => {
      wx.ready(() => {
        this.isReady = true
        this.readyPromise = undefined
        resolve()
      })
      wx.error((error) => {
        this.isReady = false
        this.readyPromise = undefined
        reject(error)
      })
    })

    return this.readyPromise
  }
  async error() {
    return this.ready().catch((error) => error)
  }

  protected async implement<Key extends keyof typeof wx | string>(key: Key, options?: any) {
    if (this.configPromise) {
      await this.configPromise
    }
    await this.ready()
    ;(wx as any)[key](options)
  }
}
