import type { BooleanLike } from '@hairy/utils'
import type { ReactNode } from 'react'
import type { WrapperProps } from '../../utils'
import { wrapper } from '../../utils'

export type CaseProps<K, P> = WrapperProps<K, P> & {
  cond?: BooleanLike
  children?: ReactNode
}

export function Case<K, P>(props: CaseProps<K, P>) {
  const { cond, children, tag, ...attrs } = props
  return wrapper(tag, attrs, children)
}
