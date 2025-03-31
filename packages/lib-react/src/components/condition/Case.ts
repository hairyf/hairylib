import type { BooleanLike } from '@hairy/utils'
import type { ReactNode } from 'react'
import type { WrapperProps, WrapperTag } from '../../utils'
import { wrapper } from '../../utils'

export type CaseProps<Kag> = WrapperProps<Kag> & {
  cond?: BooleanLike
  children?: ReactNode
}

export function Case<Tag extends WrapperTag>(props: CaseProps<Tag>) {
  const { cond, children, tag, ...attrs } = props
  return wrapper(tag, attrs, children)
}
