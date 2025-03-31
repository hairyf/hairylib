import type { ReactNode } from 'react'
import type { WrapperProps } from '../../utils'
import { wrapper } from '../../utils'

export type DefaultProps<K, P> = WrapperProps<K, P> & {
  children?: ReactNode
}
export function Default<K, P>(props: DefaultProps<K, P>) {
  const { children, tag, ...attrs } = props
  return wrapper(tag, attrs, children)
}
