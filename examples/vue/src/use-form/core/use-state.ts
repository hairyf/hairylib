import type { FieldErrors, FieldState, FormProps, InternalFieldName, State, StructValues } from '../types'
import { isFunction } from '@hairy/utils'
import { computed, reactive } from 'vue'
import { deepMap, get } from '../utils'

export function useState<
  Values extends StructValues,
  Context = any,
  TransformedValues extends StructValues = Values,
>(
  props: FormProps<Values, Context, TransformedValues>,
  names: Set<InternalFieldName>,
) {
  const state = reactive({
    fields: {},
    form: {
      isDirty: false,
      isValidating: computed(() => {
        for (const name of names) {
          if (get(state.fields, `${name}.isValidating`))
            return true
        }
        return false
      }),
      isLoading: isFunction(props.defaultValues),
      isSubmitted: false,
      isSubmitting: false,
      isSubmitSuccessful: false,
      isValid: false,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: computed((): FieldErrors<Values> => {
        return deepMap(state.fields, field => Reflect.get(field || {}, 'error'))
      }),
      disabled: props.disabled || false,
      isReady: false,
      defaultValues: isFunction(props.defaultValues)
        ? undefined
        : props.defaultValues,
    },
  })

  const resolvedValues = { ...props.defaultValues, ...props.values }
  state.fields = deepMap<Values, FieldState>(resolvedValues as Values, () => {
    return {
      invalid: false,
      isDirty: false,
      isTouched: false,
      isValidating: false,
      error: undefined,
    }
  })

  return state as State<Values>
}
