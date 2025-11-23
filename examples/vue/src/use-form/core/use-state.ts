import type { FieldError, FieldErrors, FieldState, FormProps, FormState, InternalFieldName, State, StructValues } from '../types'
import { isFunction } from '@hairy/utils'
import { computed, reactive, ref } from 'vue'
import { deepMap, get } from '../utils'

export function useState<
  Values extends StructValues,
  Context = any,
  TransformedValues extends StructValues = Values,
>(
  props: FormProps<Values, Context, TransformedValues>,
  names: Set<InternalFieldName>,
) {
  const rootError = ref({} as any)
  const state = reactive({
    fields: {},
    form: {

      isLoading: isFunction(props.defaultValues),
      isSubmitted: false,
      isSubmitting: false,
      isSubmitSuccessful: false,
      submitCount: 0,

      isValidating: computed(() => {
        for (const name of names) {
          if (get(state.fields, `${name}.isValidating`))
            return true
        }
        return false
      }),
      isDirty: computed((): FormState['isDirty'] => {
        for (const name of names) {
          if (get(state.fields, `${name}.isDirty`))
            return true
        }
        return false
      }),
      isValid: computed((): FormState['isValid'] => {
        for (const name of names) {
          if (get(state.fields, `${name}.invalid`))
            return false
        }
        return true
      }),
      dirtyFields: computed((): FormState['dirtyFields'] => {
        return deepMap(state.fields, field => Reflect.get(field || {}, 'isDirty'))
      }),
      touchedFields: computed((): FormState['touchedFields'] => {
        return deepMap(state.fields, field => Reflect.get(field || {}, 'isTouched'))
      }),
      validatingFields: computed((): FormState['validatingFields'] => {
        return deepMap(state.fields, field => Reflect.get(field || {}, 'isValidating'))
      }),
      errors: computed((): FieldErrors<Values> => {
        return reactive({
          root: rootError as any,
          ...deepMap(state.fields, field => computed({
            set: (value: FieldError) => Reflect.set(field, 'error', value),
            get: () => Reflect.get(field || {}, 'error'),
          })),
        }) as FieldErrors<Values>
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
