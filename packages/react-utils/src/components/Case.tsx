import type { ReactNode } from 'react'
import type { BooleanLike } from '../types'

export interface CaseProps {
  cond?: BooleanLike
  children?: ReactNode
}

export function Case(props: CaseProps) {
  return props.children
}
