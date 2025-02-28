import { formatUnit } from '@hairy/utils'
import type { MaybeElementRef } from '@vueuse/core'
import { unrefElement, useElementSize } from '@vueuse/core'
import type { WatchOptions, WatchStopHandle } from 'vue'
import { unref, watch } from 'vue'

export interface SyncElementSizeOptions extends WatchOptions {
  /** 是否开启宽度 @default true */
  width?: boolean
  /** 是否开启高度 @default true */
  height?: boolean
}

export interface SyncElementSizeReturn {
  start?: Function
  stop?: Function
}

/**
 * 同步 from DOM 的宽或高到指定的 to DOM
 * @param fromTarget 宽高来源元素
 * @param toTarget 宽高设置元素
 * @param options
 */
export function syncElementSize(fromTarget: MaybeElementRef,
  toTarget: MaybeElementRef,
  options: SyncElementSizeOptions = {}): SyncElementSizeReturn {
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
