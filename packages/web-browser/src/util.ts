export function redirectTo(url: string, target = '_blank') {
  const link = document.createElement('a')
  link.href = url
  link.target = target
  link.click()
  link.remove()
}

export function callPhoneNumber(phoneNumber: string) {
  const aTag = document.createElement('a')
  aTag.setAttribute('href', `tel:${phoneNumber}`)
  aTag.setAttribute('target', '_blank')
  aTag.click()
}
