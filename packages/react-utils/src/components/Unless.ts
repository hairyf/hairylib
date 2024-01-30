import type { ReactNode } from 'react'
import type { BooleanLike } from '../types'

export interface UnlessProps {
  cond?: BooleanLike
  else?: ReactNode
  children?: ReactNode
}

export function Unless(props: UnlessProps) {
  return !props.cond ? props.children : props.else
}
