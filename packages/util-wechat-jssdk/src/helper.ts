import type { WechatJssdkOptions } from './types'
import { loadScript } from './internal/load_script'

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

  private requestConfig: WechatJssdkOptions['requestConfig']

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

    if (immediate)
      this.config()
  }

  async config() {
    if (this.configPromise)
      return this.configPromise

    if (this.loadPromise)
      await this.loadPromise

    this.configPromise = (async () => {
      wx.config(await this.requestConfig())
    })()

    return this.configPromise
  }

  async ready() {
    if (this.readyPromise)
      return this.readyPromise

    if (this.loadPromise)
      await this.loadPromise

    if (this.isReady)
      return

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
    return this.ready().catch(error => error)
  }

  protected async implement<Key extends keyof typeof wx | string>(key: Key, options?: any) {
    if (this.configPromise)
      await this.configPromise

    await this.ready()
    ;(wx as any)[key](options)
  }
}
