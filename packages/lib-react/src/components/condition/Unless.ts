import { Children } from 'react'
import type { ReactElement, ReactNode } from 'react'
import type { BooleanLike } from '../../types'

import { Then } from './Then'
import { Else } from './Else'

export interface UnlessProps {
  cond?: BooleanLike
  then?: ReactNode
  else?: ReactNode
  children?: ReactNode
}

export function Unless(props: UnlessProps) {
  const children = props.then || props.children
  const elements = Children.toArray(children) as ReactElement[]
  const thenChild = elements.find(c => c.type === Then)
  const elseChild = elements.find(c => c.type === Else)
  return (thenChild || elseChild)
    ? !props.cond ? elseChild : thenChild
    : !props.cond ? props.children : props.else
}
