import { tryParseJson } from '@hairy/utils'
import { proxy, subscribe } from 'valtio'

export interface PersistantOptions {
  id: string
  storage?: Storage
  pick?: string[]
}

/**
 *
 * @deprecated please use `valtio-define`
 */
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

  const state = proxy(tryParseJson(storage?.getItem(options.id)) || initialObject)

  subscribe(state, () => {
    const pick = options.pick || Object.keys(state)
    const statePick: Record<string, any> = {}
    for (const key of pick)
      statePick[key] = state[key as keyof typeof state]
    storage?.setItem(options.id, JSON.stringify(statePick))
  })

  return state
}
