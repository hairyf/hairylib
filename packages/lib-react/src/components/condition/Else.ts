import type { IfProps } from './If'
import { wrapper } from '../../utils'
import { If } from './If'

export type ElseProps<K, P> = IfProps<K, P>

export function Else<K, P>(props: ElseProps<K, P>) {
  const { children, tag, ...attrs } = props
  return Object.keys(props).includes('cond')
    ? wrapper(If, props, children)
    : wrapper(tag, attrs, children)
}
