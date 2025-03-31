import type { IfProps } from './If'
import { wrapper } from '../../utils'
import { If } from './If'

export type ThenProps<K, P> = IfProps<K, P>

export function Then<K, P>(props: ThenProps<K, P>) {
  const { children, cond, else: _else, then, tag, ...attrs } = props
  return Object.keys(props).includes('cond')
    ? wrapper(If, props, children)
    : wrapper(tag, attrs, children)
}
