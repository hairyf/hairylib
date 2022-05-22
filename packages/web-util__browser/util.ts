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
/**
 * 拨打手机号
 * @param phoneNumber 手机号码
 */
export const makePhoneCall = (phoneNumber: string) => {
  const link = document.createElement('a')
  link.style.display = 'none'
  link.href = `tel:${phoneNumber}`
  document.body.append(link)
  link.click()
}
