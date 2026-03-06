import { extendRef } from '@vueuse/core'
import { ref, watch } from 'vue'

export function extendSelected(array: any, fieldName: string) {
  watch(
    array,
    (items: any[]) => {
      for (const item of items) {
        if (typeof item[fieldName] === 'undefined')
          extendRef(item, { [fieldName]: ref(false) })
      }
    },
    { immediate: true, flush: 'sync' },
  )
}
