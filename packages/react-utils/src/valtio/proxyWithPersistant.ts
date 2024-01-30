/* eslint-disable max-statements-per-line */
import { proxy, subscribe } from 'valtio'

export interface PersistantOptions {
  storage?: Storage
}

export function proxyWithPersistant<T extends object>(
  key: string,
  initialObject?: T,
  options: PersistantOptions = {},
): T {
  const storage = options.storage || (
    typeof localStorage !== 'undefined' ? localStorage : undefined
  )

  const state = proxy(parse(storage?.getItem(key)) || initialObject)

  subscribe(state, () => {
    storage?.setItem(key, JSON.stringify(state))
  })

  return state
}

function parse(text: string | undefined | null) {
  try { return JSON.parse(text || '') }
  catch { }
}
