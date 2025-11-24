import type {
  Form,
  FormProps,
  InternalFieldName,
  StructValues,
} from '../types'
import { cloneDeep } from '@hairy/utils'
import { reactive, ref } from 'vue'
import { useControl } from './use-control'
import { useState } from './use-state'

/**
 * Custom hook to manage the entire form.
 *
 * @remarks
 * [API](-) • [Demo](-) • [Video](-)
 *
 * @param props - form configuration and validation parameters.
 *
 * @returns methods - individual functions to manage the form state. {@link Form}
 *
 * @example
 * ```vue
 * <script setup lang="ts">
 * function App() {
 *   const { register, handleSubmit, watch, state, values } = useForm();
 * </script>
 *
 * <template>
 *   <form @submit="handleSubmit(onSubmit)">
 *     <input v-bind="register('example')" />
 *     <input v-bind="register('exampleRequired', { required: true })" />
 *     <button type="submit">Submit</button>
 *   </form>
 * </template>
 * ```
 */
export function useForm<
  Values extends StructValues,
  Context = any,
  TransformedValues extends StructValues = Values,
>(props: FormProps<Values, Context, TransformedValues>) {
  props = {
    ...props,
    mode: props.mode || 'onSubmit',
    reValidateMode: props.reValidateMode || 'onChange',
    shouldUnregister: props.shouldUnregister ?? false,
    shouldFocusError: props.shouldFocusError ?? true,
  }

  const values = ref<Values>(cloneDeep(props.values) || {} as Values)
  const names = reactive(new Set<InternalFieldName>())
  const state = useState(props, names)

  const control = useControl(props, values, state, names)

  control._resetDefaultValues()

  const form: Form<Values, Context, TransformedValues> = {
    values: values as Values,
    state,
    control,
    update: control.update,
    trigger: control.trigger,
    reset: control.reset,
    handleSubmit: control.handleSubmit,
    setError: control.setError,
    focus: control.focus,
    resetField: control.resetField,
    clearError: control.clearError,
    register: control.register,
    unregister: control.unregister,
  }

  return reactive(form)
}
