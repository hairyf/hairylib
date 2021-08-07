import { Directive } from 'vue-demi'
import { analySize, AnalySizeOption, analyUnit } from '@tuimao/core'

export type DirectiveSize = Directive<HTMLElement, AnalySizeOption>
export type DirectiveUnit = Directive<HTMLElement, number | string>
export type DirectiveValue = Directive<HTMLElement, string>

export const directiveUnit = (...keys: (keyof CSSStyleDeclaration)[]) => {
  return <DirectiveUnit>((el, _size) => {
    for (const key of keys) {
      _size && (el.style[key as any] = analyUnit(_size.value || ''))
    }
  })
}

export const directiveSize = () => {
  return <DirectiveSize>((el, _size) => {
    const size = analySize(_size.value || '')
    size.width && (el.style.width = size.width)
    size.height && (el.style.height = size.height)
  })
}

export const directiveValue = (...keys: (keyof CSSStyleDeclaration)[]) => {
  return <DirectiveUnit>((el, { value }) => {
    for (const key of keys) {
      ;(el.style as any)[key] = value
    }
  })
}

export const directiveArgValue = (...keys: (keyof CSSStyleDeclaration)[]) => {
  return <DirectiveUnit>((el, { arg, value }) => {
    for (const key of keys) {
      ;(el.style as any)[key] = arg?.[0] || value
    }
  })
}
