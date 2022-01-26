/**
 * 下载网络文件
 * @param url 下载地址
 * @param fileName 文件名称
 */
export const downloadNetworkFile = (url: string, fileName?: string) => {
  const a = document.createElement('a')
  fileName && (a.download = fileName)
  a.href = url
  a.click()
}
