import { MaybeElementRef } from '@vueuse/core'
import { unref } from 'vue'

export const unrefElement = <T extends HTMLElement>(elRef: MaybeElementRef): T => unref(elRef)
