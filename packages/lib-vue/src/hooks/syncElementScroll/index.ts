import type { MaybeRef } from '@vueuse/core'
import { useEventListener } from '@vueuse/core'
import debounce from 'lodash/debounce'
import throttle from 'lodash/throttle'
import { reactive } from 'vue'

interface SyncElementSyncScrollOptions {
  left?: boolean
  top?: boolean
  wait?: number
  immediate?: boolean
}

/**
 * Synchronize scrolling between two DOM with the same scrollbar
 * @param fromTarget DOM-A
 * @param toTarget DOM-B
 * @param options
 * @todo optimizes the reuse of useEventListener
 * @todo may have bugs when using wait
 */
export function syncElementSyncScroll(fromTarget: MaybeRef<EventTarget | null | undefined>, toTarget: MaybeRef<EventTarget | null | undefined>, options: SyncElementSyncScrollOptions = {}) {
  const { left = true, top = true, wait, immediate = true } = options

  const debounceScrollLocks = reactive({ from: false, to: false })

  const onChangeLockScrollListener = debounce(
    (type: keyof typeof debounceScrollLocks) => {
      debounceScrollLocks[type] = true
    },
    20,
    { leading: true, trailing: false },
  )

  const offChangeLockScrollListener = debounce(
    (type: keyof typeof debounceScrollLocks) => {
      debounceScrollLocks[type] = false
    },
    20,
    { leading: false, trailing: true },
  )

  const syncScroll = (type: 'from' | 'to') => {
    const positive = type
    const opposite = type === 'from' ? 'to' : 'from'
    const elements = reactive({
      from: fromTarget as HTMLElement,
      to: toTarget as HTMLElement,
    })
    if (debounceScrollLocks[type])
      return
    onChangeLockScrollListener(opposite)

    const aElement = elements[positive]
    const bElement = elements[opposite]

    const options: ScrollToOptions = {}
    if (left)
      options.left = aElement.scrollLeft
    if (top)
      options.top = aElement.scrollTop

    if (!aElement || !bElement)
      return
    bElement?.scroll(options)
    offChangeLockScrollListener(opposite)
  }
  const syncFromTo = () => syncScroll('from')
  const syncToFrom = () => syncScroll('to')

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

  if (immediate)
    start()

  return { stop, start, syncFromTo, syncToFrom }
}
