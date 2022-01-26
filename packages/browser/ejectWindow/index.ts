/**
 * 跳转到新的页面
 * @param url 跳转url
 */
export const ejectWindow = (url: string) => {
  const a = document.createElement('a')
  a.href = url
  a.target = '_blank'
  a.click()
}
