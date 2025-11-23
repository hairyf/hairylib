import type { Ref } from 'vue'
import type { DefaultValues, StructValues } from '../types'
import { cloneDeep } from '@hairy/utils'
import { computed, ref } from 'vue'

export function useDefaultValues<Values extends StructValues>(values: Ref<Values>) {
  const _defaultValues = ref({} as unknown as DefaultValues<Values>)
  return computed({
    get: () => _defaultValues.value,
    set: (value: DefaultValues<Values>) => {
      _defaultValues.value = value
      values.value = cloneDeep(value) as Values
    },
  })
}
