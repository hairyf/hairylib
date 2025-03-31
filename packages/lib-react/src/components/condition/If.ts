import type { BooleanLike } from '@hairy/utils'

import type { ReactElement, ReactNode } from 'react'

import type { WrapperProps } from '../../utils'

import { Children } from 'react'
import { wrapper } from '../../utils'
import { Else } from './Else'
import { Then } from './Then'

export type IfProps<K, P> = WrapperProps<K, P> & {
  cond?: BooleanLike
  then?: ReactNode
  else?: ReactNode
  children?: ReactNode
}

export function If<K, P>(props: IfProps<K, P>) {
  const { then, cond, else: _else, children = props.then, tag, ...attrs } = props
  const elements = Children.toArray(children) as ReactElement[]
  const thenChild = elements.find(c => c.type === Then)
  const elseChild = elements.find(c => c.type === Else)
  const child = (thenChild || elseChild)
    ? cond ? thenChild : elseChild
    : cond ? children : _else
  return wrapper(tag, attrs, child)
}
