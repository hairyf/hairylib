import type { ReactNode } from 'react'
import type { WrapperProps, WrapperTag } from '../../utils'
import { wrapper } from '../../utils'

export type DefaultProps<Tag> = WrapperProps<Tag> & {
  children?: ReactNode
}
export function Default<Tag extends WrapperTag>(props: DefaultProps<Tag>) {
  const { children, tag, ...attrs } = props
  return wrapper(tag, attrs, children)
}
