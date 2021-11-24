/* eslint-disable @typescript-eslint/no-non-null-assertion */
import axios from 'axios'
import * as WxType from 'jweixin'
import { DefineEnvMode } from '../common/define/types'
import { envApiHostMap, envSourceAppidMap } from './internal/config'
import { loadScript } from './internal/load_script'

declare module 'jweixin' {
  type v4ApiMethod = 'updateTimelineShareData' | 'updateAppMessageShareData'
  type v4jsApiList = v4ApiMethod[]
  export function config(conf: {
    debug?: boolean | undefined // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: string // 必填，公众号的唯一标识
    timestamp: number // 必填，生成签名的时间戳
    nonceStr: string // 必填，生成签名的随机串
    signature: string // 必填，签名，见附录1
    jsApiList: jsApiList & v4jsApiList[] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
  })
}

declare const wx: typeof WxType

/** 微信 jssdk wx.config 参数, 'timestamp' | 'nonceStr' | 'signature' 不需要传，由内置请求得出 */
export type WechatJssdkConfig = Omit<Partial<Parameters<typeof wx.config>[0]>, 'timestamp' | 'nonceStr' | 'signature'>
export interface WechatJssdkOptions {
  /**
   * 开发环境
   */
  env: keyof typeof DefineEnvMode
  /**
   * wx.config 基本参数, wx.config 调用时会合并参数
   */
  config?: WechatJssdkConfig
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

  private apiHost: string

  private isReady = false

  private configParams: WechatJssdkConfig = {}

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
    const { immediate = true } = options
    this.apiHost = envApiHostMap.get(options.env)!
    this.configParams.appId = envSourceAppidMap.get(options.env)!
    this.configParams = { ...this.configParams, ...options.config }
    this.version = options.version || '1.3.0'

    this.loadJssdk()

    if (immediate) this.config()
  }

  async config(conf?: WechatJssdkConfig) {
    if (this.configPromise) return this.configPromise

    if (this.loadPromise) await this.loadPromise

    this.configParams = { ...this.configParams, ...conf }

    this.configPromise = axios
      .get('/api/v1/share/jssdk.config', {
        baseURL: this.apiHost,
        params: { appid: this.configParams.appId, url: location.href }
      })
      .then(async ({ data }) => {
        wx.config({
          ...(this.configParams as any),
          timestamp: data.data.timestamp,
          nonceStr: data.data.nonce_str,
          signature: data.data.signature
        })
        this.configPromise = undefined
      })

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
    return this.ready().catch((v) => v)
  }

  protected async implement<Key extends keyof typeof wx | string>(key: Key, options?: any) {
    if (this.configPromise) {
      await this.configPromise
    }
    await this.ready()
    ;(wx as any)[key](options)
  }
}
