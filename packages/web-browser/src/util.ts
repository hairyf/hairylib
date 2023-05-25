/**
 * 跳转到新的页面
 * @param url 跳转url
 */
export function ejectWindow(url: string) {
  const link = document.createElement('a')
  link.href = url
  link.target = '_blank'
  link.click()
  link.remove()
}
/**
 * 拨打手机号
 * @param phoneNumber 手机号码
 */
export function makePhoneCall(phoneNumber: string) {
  const link = document.createElement('a')
  link.style.display = 'none'
  link.href = `tel:${phoneNumber}`
  link.click()
  link.remove()
}
