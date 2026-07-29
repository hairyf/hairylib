import mitt from 'mitt'
import { useEffect, useRef } from 'react'

/** Type definition for an event listener callback function */
export interface EventBusListener<T = any> {
  (event: T): void
}

/** Global event emitter instance powered by Mitt */
export const emitter = mitt<any>()

/**
 * React hook to subscribe to and dispatch events via a global event bus.
 *
 * @template T The type of data associated with the event payload.
 * @param key The unique event identifier to listen to or emit.
 */
export function useEventBus<T>(key: string) {
  // Store the latest event listener in a ref to keep it up-to-date
  // without re-subscribing the emitter on every render.
  const listenerRef = useRef<EventBusListener<T>>(undefined)

  /**
   * Registers a listener callback function for this event within the component.
   * Updating this will not re-trigger the `useEffect` subscription setup.
   */
  function on(listener: EventBusListener<T>) {
    listenerRef.current = listener
  }

  /**
   * Directly subscribes a listener to the global Mitt emitter bypassing the ref store.
   * Note: Callers are responsible for manually unsubscribing this handler.
   */
  on.raw = (listener: EventBusListener<T>) => emitter.on(key, listener)

  /**
   * Emits an event with an optional payload to all listeners subscribed to `key`.
   */
  function emit(event?: T) {
    emitter.emit(key, event)
  }

  /**
   * Unsubscribes a specific listener directly from the global Mitt emitter.
   */
  function off(listener: EventBusListener) {
    emitter.off(key, listener)
  }

  // Subscribe to the event bus when the component mounts or the key changes
  useEffect(() => {
    /** Internal handler proxying events to the ref-held callback */
    function callback(val: any) {
      listenerRef.current?.(val)
    }

    emitter.on(key, callback)

    // Cleanup: unsubscribe listener when component unmounts or `key` changes
    return () => emitter.off(key, callback)
  }, [key])

  return {
    on,
    emit,
    off,
  }
}
