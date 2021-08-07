import { Directive } from 'vue-demi'
import { AnalySizeOption } from '@tuimao/core'

export type DirectiveSize = Directive<HTMLElement, AnalySizeOption>
export type DirectiveUnit = Directive<HTMLElement, number | string>
