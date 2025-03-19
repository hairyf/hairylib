import type { Noop } from '@hairy/utils'
import type { MaybeElementRef } from '@vueuse/core'
import type { WatchOptions, WatchStopHandle } from 'vue'
import { formatUnit } from '@hairy/utils'
import { unrefElement, useElementSize } from '@vueuse/core'
import { unref, watch } from 'vue'

export interface SyncElementSizeOptions extends WatchOptions {
  /** Is the width enabled @default true */
  width?: boolean
  /** Is the height enabled @default true */
  height?: boolean
}

export interface SyncElementSizeReturn {
  start?: Noop
  stop?: Noop
}

/**
 * Synchronize the width or height of from DOM to the specified to DOM
 * @param fromTarget width and height source element
 * @param toTarget width and height setting elements
 * @param options
 */
export function syncElementSize(fromTarget: MaybeElementRef, toTarget: MaybeElementRef, options: SyncElementSizeOptions = {}): SyncElementSizeReturn {
  const { width: isOnWidth = true, height: isOnHeight = false } = options

  const defaultSize = { width: '', height: '' }
  const fromSize = useElementSize(fromTarget)

  let widthStopHandle: undefined | WatchStopHandle
  let heightStopHandle: undefined | WatchStopHandle

  const sync = (type: 'width' | 'height') => {
    const sources = [fromSize[type], toTarget]
    const callback = () => {
      const element = unrefElement(toTarget)
      if (!element)
        return undefined
      element.style[type] = formatUnit(fromSize[type].value)
    }
    return watch(sources, callback, { immediate: true, ...options })
  }

  const stop = () => {
    widthStopHandle?.()
    heightStopHandle?.()
    const element = unrefElement(toTarget)!
    element.style.width = defaultSize.width
    element.style.height = defaultSize.height
  }

  const start = () => {
    if (isOnWidth)
      widthStopHandle = sync('width')
    if (isOnHeight)
      heightStopHandle = sync('height')
  }

  watch(
    () => unref(toTarget),
    () => {
      const element = unrefElement(toTarget)!
      defaultSize.width = element.style.width
      defaultSize.height = element.style.height
    },
  )

  start()

  return { start, stop }
}
