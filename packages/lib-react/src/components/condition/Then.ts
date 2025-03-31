import type { WrapperTag } from '../../utils'
import type { IfProps } from './If'
import { wrapper } from '../../utils'
import { If } from './If'

export type ThenProps<Tag> = IfProps<Tag>

export function Then<Tag extends WrapperTag>(props: ThenProps<Tag>) {
  const { children, cond, else: _else, then, tag, ...attrs } = props
  return Object.keys(props).includes('cond')
    ? wrapper(If, props, children)
    : wrapper(tag, attrs, children)
}
