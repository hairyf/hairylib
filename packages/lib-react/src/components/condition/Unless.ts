import type { BooleanLike } from '@hairy/utils'
import type { ReactElement, ReactNode } from 'react'

import { Children } from 'react'
import { Else } from './Else'
import { Then } from './Then'

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
