import type { BooleanLike } from '@hairy/utils'
import type { PropsWithChildren, ReactElement } from 'react'
import { Children, isValidElement } from 'react'
import { Case } from './Case'
import { Default } from './Default'

export interface SwitchProps extends PropsWithChildren {
  value?: BooleanLike
}

export function Switch(props: SwitchProps) {
  const isUseValue = props.value !== undefined
  let matchingCase: ReactElement | undefined
  let defaultCase: ReactElement | undefined

  Children.forEach(props.children, (child) => {
    if (!isValidElement(child) || matchingCase)
      return
    if (child.type === Case) {
      // eslint-disable-next-line ts/ban-ts-comment
      // @ts-expect-error
      const cond = child?.props?.cond
      if (isUseValue ? props.value === cond : cond) {
        matchingCase = child
        return
      }
    }
    if (!defaultCase && child.type === Default)
      defaultCase = child
  })

  return matchingCase ?? defaultCase ?? null
}
