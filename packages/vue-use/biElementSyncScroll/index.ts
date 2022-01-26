/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-24 13:42:28
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-21 17:38:44
 */
import { MaybeRef, useEventListener } from '@vueuse/core'
import { debounce, throttle } from 'lodash'
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

  const locked = reactive({ from: false, to: false })

  const unlock = debounce((type: keyof typeof locked) => (locked[type] = true), 20, {
    leading: true,
    trailing: false
  })
  const lock = debounce((type: keyof typeof locked) => (locked[type] = false), 20, {
    leading: false,
    trailing: true
  })

  useEventListener(
    fromTarget,
    'scroll',
    throttle(() => {
      if (locked.from) return undefined

      unlock('to')

      const aElement = unref(fromTarget) as HTMLElement
      const bElement = unref(toTarget) as HTMLDivElement

      if (!aElement || !bElement) return undefined

      const options: ScrollToOptions = {}
      if (left) options.left = aElement.scrollLeft
      if (top) options.top = aElement.scrollTop

      bElement?.scroll(options)

      lock('to')
    }, wait)
  )

  useEventListener(
    toTarget,
    'scroll',
    throttle(() => {
      if (locked.to) return undefined

      unlock('from')

      const aElement = unref(fromTarget) as HTMLElement
      const bElement = unref(toTarget) as HTMLDivElement

      if (!aElement || !bElement) return undefined

      const options: ScrollToOptions = {}
      if (left) options.left = bElement.scrollLeft
      if (top) options.top = bElement.scrollTop

      aElement?.scroll(options)

      lock('from')
    }, wait)
  )
}
