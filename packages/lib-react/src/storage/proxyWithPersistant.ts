import { jsonTryParse } from '@hairy/utils'
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

  const state = proxy(jsonTryParse(storage?.getItem(key)) || initialObject)

  subscribe(state, () => {
    storage?.setItem(key, JSON.stringify(state))
  })

  return state
}
