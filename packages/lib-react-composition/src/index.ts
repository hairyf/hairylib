import { noop } from '@hairy/utils'

export * from './computed'
export * from './effectScope'
export * from './lifecycle'
export * from './reactive'
export * from './reactivity'
export * from './readonly'
export * from './ref'
export * from './watch'
export * from './watchEffect'

export {
  isProxy,
  isReactive,
  isReadonly,
  isRef,
  isShallow,
  markRaw,
  toRaw,
  toReactive,
  toReadonly,
  toRef,
  toRefs,
  toValue,
  unref,
} from '@vue/reactivity'
export {
  Fragment,
  createElement as h,
} from 'react'
export const getCurrentInstance = noop
export const hasInjectionContext = noop
export const inject = noop
export const provide = noop
export const nextTick = noop
export const defineComponent = noop
export const TransitionGroup = noop
