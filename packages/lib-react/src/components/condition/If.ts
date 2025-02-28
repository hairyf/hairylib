import { Children } from 'react'

import type { ReactElement, ReactNode } from 'react'

import type { BooleanLike } from '../../types'

import { Then } from './Then'
import { Else } from './Else'

export interface IfProps {
  cond?: BooleanLike
  then?: ReactNode
  else?: ReactNode
  children?: ReactNode
}

export function If(props: IfProps) {
  const children = props.then || props.children
  const elements = Children.toArray(children) as ReactElement[]
  const thenChild = elements.find(c => c.type === Then)
  const elseChild = elements.find(c => c.type === Else)

  return (thenChild || elseChild)
    ? props.cond ? thenChild : elseChild
    : props.cond ? children : props.else
}
