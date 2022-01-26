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
