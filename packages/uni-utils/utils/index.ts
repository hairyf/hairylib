type UniPlatforms =
  | 'app-plus'
  | 'app-plus-nvue'
  | 'h5'
  | 'mp-weixin'
  | 'mp-alipay'
  | 'mp-baidu'
  | 'mp-toutiao'
  | 'mp-qq'
  | 'mp-360'
  | 'mp'
  | 'quickapp-webview'
  | 'quickapp-webview-union'
  | 'quickapp-webview-huawei'
  | undefined
/**
 * 当前环境信息
 */
export const UNI_PLATFORM =
  typeof process !== 'undefined' ? (process?.env?.VUE_APP_PLATFORM as UniPlatforms) : undefined

type UniApiKey = keyof UniApp.Uni
type UniApiValue = UniApp.Uni[UniApiKey]
type GetSuccessReult<T extends UniApiValue> = Parameters<Parameters<T>[0]['success']>[0]

/**
 * 将 Uni | wx 转换为异步 Api
 * @param api api
 */
export const promisify = <V extends UniApiValue>(api: V) => {
  return async (...args: Parameters<V>): Promise<GetSuccessReult<V>> => {
    const [error, result] = (api as any)(...args)
    return error ? Promise.reject(error) : Promise.resolve(result)
  }
}

/**
 * 将 rpx 转换为 px
 * @param rpx
 */
export const rpx2px = (rpx: number) => {
  const info = uni.getSystemInfoSync()
  const rate = 750 / info.windowWidth
  return rate * rpx
}

/**
 * 将 px 转换为 rpx
 * @param px
 */
export const px2rpx = (px: number) => {
  const info = uni.getSystemInfoSync()
  const rate = info.windowWidth / 750
  return rate * px
}
