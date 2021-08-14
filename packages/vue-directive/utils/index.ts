import { Directive } from 'vue-demi'
import { analySize, AnalySizeOption, analyUnit } from '@tuimao/core'

export type DirectiveSize = Directive<HTMLElement, AnalySizeOption>
export type DirectiveUnit = Directive<HTMLElement, number | string>
export type DirectiveValue = Directive<HTMLElement, string>
export type DirectiveElements<E = HTMLElement> = Record<string, Directive<E, any>>
export type DirectiveConfig = Partial<typeof directiveOptions>

export const directiveUnit = (...keys: (keyof CSSStyleDeclaration)[]) => {
  return <DirectiveUnit>((element, _size) => {
    for (const key of keys) {
      _size && (element.style[key as any] = analyUnit(_size.value || ''))
    }
  })
}

export const directiveSize = () => {
  return <DirectiveSize>((element, _size) => {
    const size = analySize(_size.value || '')
    size.width && (element.style.width = size.width)
    size.height && (element.style.height = size.height)
  })
}

export const directiveValue = (...keys: (keyof CSSStyleDeclaration)[]) => {
  return <DirectiveUnit>((element, { value }) => {
    for (const key of keys) {
      ;(element.style as any)[key] = value
    }
  })
}

export const directiveArgumentValue = (...keys: (keyof CSSStyleDeclaration)[]) => {
  return <DirectiveUnit>((element, { arg, value }) => {
    for (const key of keys) {
      ;(element.style as any)[key] = arg?.[0] || value
    }
  })
}

export const directiveOptions = {
  permissions: [] as string[]
}

export const defineDirectiveConfig = (options: DirectiveConfig = {}) => {
  for (const [key, value] of Object.entries(options)) {
    ;(directiveOptions as any)[key] = value
  }
}
