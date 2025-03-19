import type { BooleanLike } from '@hairy/utils'
import type { ReactNode } from 'react'

export interface CaseProps {
  cond?: BooleanLike
  children?: ReactNode
}

export function Case(props: CaseProps) {
  return props.children
}
