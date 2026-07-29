import { useReducer } from 'react'

export const tryUseReducer: typeof useReducer = (reducer: any, initializerArg: any, initializer?: any) => {
  try {
    return useReducer(reducer, initializerArg, initializer)
  }
  catch {
    return [initializerArg, () => {}] as any
  }
}
