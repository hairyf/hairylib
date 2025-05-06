import type { Fn } from '../typings'

export function redirectTo(url: string, target = '_blank') {
  const link = document.createElement('a')
  link.href = url
  link.target = target
  link.click()
  link.remove()
}

export function dialsPhone(phoneNumber: string) {
  const aTag = document.createElement('a')
  aTag.setAttribute('href', `tel:${phoneNumber}`)
  aTag.setAttribute('target', '_blank')
  aTag.click()
}

export function on<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['addEventListener']> | [string, Fn | null, ...any]
): void {
  if (obj && obj.addEventListener)
    obj.addEventListener(...(args as Parameters<HTMLElement['addEventListener']>))
}

export function off<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['removeEventListener']> | [string, Fn | null, ...any]
): void {
  if (obj && obj.removeEventListener)
    obj.removeEventListener(...(args as Parameters<HTMLElement['removeEventListener']>))
}
