import mitt from 'mitt'
import { useEffect, useRef } from 'react'

export interface EventBusListener<T = any> {
  (event: T): void
}

const emitter = mitt() as any

export function useEventBus<T>(key: string) {
  const onRef = useRef<EventBusListener>(undefined)
  function on(listener: EventBusListener<T>) {
    emitter.on(key, listener)
    onRef.current = listener
    useEffect(() => {
      if (!onRef.current)
        return
      emitter.off(key, onRef.current)
      emitter.on(key, listener)
      onRef.current = listener
      return () => emitter.off(key, listener)
    }, [listener])
  }

  function emit(event?: T) {
    emitter.emit(key, event)
  }

  function off(listener: EventBusListener) {
    emitter.off(key, listener)
  }

  return {
    on,
    emit,
    off,
  }
}
