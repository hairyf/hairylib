import { Directive } from 'vue-demi'
import { analySize, AnalySizeOption, analyUnit } from '@tuimao/core'

export type DirectiveSize = Directive<HTMLElement, AnalySizeOption>
export type DirectiveUnit = Directive<HTMLElement, number | string>
export type DirectiveValue = Directive<HTMLElement, string>
export type DirectiveElements<E = HTMLElement> = Record<string, Directive<E, any>>
export type DirectiveConfig = Partial<typeof directiveOptions>

/**
 * 创建命令, 对应 style 中的 key value 设置
 * value 会进入 analyUnit 的处理
 * app.directive('py', directiveUnit('padding-left', 'padding-right'))
 * @param keys {CSSStyleDeclaration}
 */
export const directiveUnit = (...keys: (keyof CSSStyleDeclaration)[]) => {
  return <DirectiveUnit>((element, _size) => {
    for (const key of keys) {
      _size && (element.style[key as any] = analyUnit(_size.value || ''))
    }
  })
}
/**
 * 创建命令, 对应 style.width, style.height 中的 key value 设置
 * value 会进入 analySize 的处理
 * app.directive('size', directiveSize())
 */
export const directiveSize = () => {
  return <DirectiveSize>((element, _size) => {
    const size = analySize(_size.value || '')
    size.width && (element.style.width = size.width)
    size.height && (element.style.height = size.height)
  })
}

/**
 * 创建命令, 对应 style 中的 key value 设置
 * value 不会进行处理, 而是直接赋值
 * app.directive('size', directiveSize())
 */
export const directiveValue = (...keys: (keyof CSSStyleDeclaration)[]) => {
  return <DirectiveUnit>((element, { value }) => {
    for (const key of keys) {
      ;(element.style as any)[key] = value
    }
  })
}
/**
 * 创建命令, 对应 style 中的 key value 设置
 * value 对应arg[0] || value, 不会进行处理, 而是直接赋值
 * app.directive('size', directiveSize())
 */
export const directiveArgumentValue = (...keys: (keyof CSSStyleDeclaration)[]) => {
  return <DirectiveUnit>((element, { arg, value }) => {
    for (const key of keys) {
      ;(element.style as any)[key] = arg?.[0] || value
    }
  })
}

/**
 * 命令配置
 */
export const directiveOptions = {
  permissions: [] as string[]
}

/**
 * 定义命令配置
 * @param options {DirectiveConfig}
 */
export const defineDirectiveConfig = (options: DirectiveConfig = {}) => {
  for (const [key, value] of Object.entries(options)) {
    ;(directiveOptions as any)[key] = value
  }
}
