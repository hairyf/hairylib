import { jsonTryParse } from '@hairy/utils'
import { proxy, subscribe } from 'valtio'

export interface PersistantOptions {
  id: string
  storage?: Storage
  pick?: string[]
}

export function proxyWithPersistant<T extends object>(key: string, initialObject?: T, options?: Omit<PersistantOptions, 'key'>): T
export function proxyWithPersistant<T extends object>(options: PersistantOptions, initialObject?: T): T
export function proxyWithPersistant<T extends object>(keyOrOptions: string | PersistantOptions, initialObject?: T): T {
  let options: PersistantOptions
  if (typeof keyOrOptions === 'string') {
    options = { id: keyOrOptions }
  }
  else {
    options = { ...keyOrOptions }
  }
  const storage = options.storage || (
    typeof localStorage !== 'undefined' ? localStorage : undefined
  )
  typeof keyOrOptions === 'string' && (keyOrOptions = { id: keyOrOptions })

  const state = proxy(jsonTryParse(storage?.getItem(options.id)) || initialObject)

  subscribe(state, () => {
    const pick = options.pick || Object.keys(state)
    const statePick: any = {}
    for (const key of pick)
      statePick[key] = state[key]
    storage?.setItem(options.id, JSON.stringify(statePick))
  })

  return state
}
