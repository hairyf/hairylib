import { isFunction, noop } from '@hairy/utils'
import { useState } from 'react'

export const tryUseState: typeof useState = (initialState?: any) => {
  try {
    return useState(initialState)
  }
  catch {
    // Fallback to a default state if useState fails
    return [isFunction(initialState) ? initialState() : initialState, noop]
  }
}
