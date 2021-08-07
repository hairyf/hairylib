import { Directive } from 'vue-demi'
import { analySize, AnalySizeOption, analyUnit } from '@tuimao/core'

export type DirectiveSize = Directive<HTMLElement, AnalySizeOption>
export type DirectiveUnit = Directive<HTMLElement, number | string>

export const directiveUnit = (key: keyof CSSStyleDeclaration) => {
  return <DirectiveUnit>((el, _size) => {
    _size && (el.style[key as any] = analyUnit(_size.value || ''))
  })
}

export const directiveSize = () => {
  return <DirectiveSize>((el, _size) => {
    const size = analySize(_size.value || '')
    size.width && (el.style.width = size.width)
    size.height && (el.style.height = size.height)
  })
}
