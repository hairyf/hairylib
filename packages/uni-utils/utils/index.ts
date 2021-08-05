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
type UniApiVal = UniApp.Uni[UniApiKey]
type GetSuccessReult<T extends UniApiVal> = Parameters<Parameters<T>[0]['success']>[0]

/**
 * 将 Uni | wx 转换为异步 Api
 * @param api api
 */
export const promisify = <V extends UniApiVal>(api: V) => {
  return async (...args: Parameters<V>): Promise<GetSuccessReult<V>> => {
    const [error, result] = (api as any)(...args)
    return error ? Promise.reject(error) : Promise.resolve(result)
  }
}
