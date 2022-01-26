/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-24 14:20:31
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-21 17:38:38
 */

import { analyUnit } from '@hairy/utils'
import { MaybeElementRef, useElementSize } from '@vueuse/core'
import { unref, watch } from 'vue'

interface BiElementMapSizeOptions {
  width?: boolean
  height?: boolean
}

/**
 * 同步 from DOM 的宽或高到指定的 to DOM
 * @param fromTarget
 * @param toTarget
 * @param options
 */
export const biElementMapSize = (
  fromTarget: MaybeElementRef,
  toTarget: MaybeElementRef,
  options: BiElementMapSizeOptions = {}
) => {
  const { width: onWidth = true, height: onHeight = true } = options

  const { width: fromWidth, height: fromHeight } = useElementSize(fromTarget)

  onWidth &&
    watch(
      [fromWidth, toTarget],
      () => {
        const element = unref(toTarget) as HTMLDivElement
        if (!element) return undefined
        element.style.width = analyUnit(fromWidth.value)
      },
      { immediate: true }
    )

  onHeight &&
    watch(
      [fromHeight, toTarget],
      () => {
        const element = unref(toTarget) as HTMLDivElement
        if (!element) return undefined
        element.style.height = analyUnit(fromHeight.value)
      },
      { immediate: true }
    )
}
