/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-24 13:42:28
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-21 17:38:44
 */
import { MaybeRef, useEventListener } from '@vueuse/core'
import { debounce, throttle } from 'lodash-es'
import { unref, reactive } from 'vue'
interface BiElementSyncScrollOptions {
  left?: boolean
  top?: boolean
  wait?: number
}

/**
 * 同步两个具有相同滚动条的DOM的滚动
 * @param fromTarget DOM-A
 * @param toTarget DOM-B
 * @param options
 * @todo 优化 useEventListener 复用
 * @todo 使用 wait 可能存在 BUG
 */
export const biElementSyncScroll = (
  fromTarget: MaybeRef<EventTarget | null | undefined>,
  toTarget: MaybeRef<EventTarget | null | undefined>,
  options: BiElementSyncScrollOptions = {}
) => {
  const { left = true, top = true, wait } = options

  const debounceScrollLocks = reactive({ from: false, to: false })

  const onChangeLockScrollListener = debounce(
    (type: keyof typeof debounceScrollLocks) => {
      debounceScrollLocks[type] = true
    },
    20,
    { leading: true, trailing: false }
  )
  const offChangeLockScrollListener = debounce(
    (type: keyof typeof debounceScrollLocks) => {
      debounceScrollLocks[type] = false
    },
    20,
    { leading: false, trailing: true }
  )
  const syncFromTo = () => {
    if (debounceScrollLocks.from) return undefined

    onChangeLockScrollListener('to')

    const aElement = unref(fromTarget) as HTMLElement
    const bElement = unref(toTarget) as HTMLDivElement

    if (!aElement || !bElement) return undefined

    const options: ScrollToOptions = {}
    if (left) options.left = aElement.scrollLeft
    if (top) options.top = aElement.scrollTop

    bElement?.scroll(options)

    offChangeLockScrollListener('to')
  }

  const syncToFrom = () => {
    if (debounceScrollLocks.to) return undefined

    onChangeLockScrollListener('from')

    const aElement = unref(fromTarget) as HTMLElement
    const bElement = unref(toTarget) as HTMLDivElement

    if (!aElement || !bElement) return undefined

    const options: ScrollToOptions = {}
    if (left) options.left = bElement.scrollLeft
    if (top) options.top = bElement.scrollTop

    aElement?.scroll(options)

    offChangeLockScrollListener('from')
  }

  let toStopHandle: undefined | (() => void)
  let formStopHandle: undefined | (() => void)

  const stop = () => {
    toStopHandle?.()
    formStopHandle?.()
  }
  const start = () => {
    toStopHandle = useEventListener(fromTarget, 'scroll', throttle(syncFromTo, wait))
    formStopHandle = useEventListener(toTarget, 'scroll', throttle(syncToFrom, wait))
  }

  start()

  return { stop, start, syncFromTo, syncToFrom }
}
