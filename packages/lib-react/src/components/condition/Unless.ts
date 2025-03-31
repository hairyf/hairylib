import type { BooleanLike } from '@hairy/utils'
import type { ReactElement, ReactNode } from 'react'

import type { WrapperProps } from '../../utils'
import { Children } from 'react'
import { wrapper } from '../../utils'
import { Else } from './Else'
import { Then } from './Then'

export type UnlessProps<K, P> = WrapperProps<K, P> & {
  cond?: BooleanLike
  then?: ReactNode
  else?: ReactNode
  children?: ReactNode
}

export function Unless<K, P>(props: UnlessProps<K, P>) {
  const { cond, then, else: _else, tag, children = props.then, ...attrs } = props
  const elements = Children.toArray(children) as ReactElement[]
  const thenChild = elements.find(c => c.type === Then)
  const elseChild = elements.find(c => c.type === Else)
  const child = (thenChild || elseChild)
    ? !cond ? elseChild : thenChild
    : !cond ? children : _else
  return wrapper(tag, attrs, child)
}
