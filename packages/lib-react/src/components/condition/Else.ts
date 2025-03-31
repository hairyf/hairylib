import type { WrapperTag } from '../../utils'
import type { IfProps } from './If'
import { wrapper } from '../../utils'
import { If } from './If'

export type ElseProps<Tag> = IfProps<Tag>

export function Else<Tag extends WrapperTag>(props: ElseProps<Tag>) {
  const { children, tag, ...attrs } = props
  return Object.keys(props).includes('cond')
    ? wrapper(If, props, children)
    : wrapper(tag, attrs, children)
}
