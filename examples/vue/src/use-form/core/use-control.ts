import type { Ref } from 'vue'
import type { ElementMapKey } from '../constants'
import type {
  Control,
  DefaultValues,
  FieldError,
  Fields,
  FieldState,
  FocusOptions,
  FormProps,
  InternalFieldName,
  KeepStateOptions,
  RegisterOptions,
  ResetAction,
  ResetFieldConfig,
  State,
  StructValues,
  SubmitErrorHandler,
  SubmitHandler,
  UnregisterOptions,
  UpdateOptions,
} from '../types'
import type { ValuePath, ValuePathValue } from '../types/path'
import type { TriggerConfig } from '../types/trigger'
import { cloneDeep, isBrowser, isElement, toArray } from '@hairy/utils'
import { reactiveComputed } from '@vueuse/core'
import { computed, reactive, ref } from 'vue'
import { ELEMENT_EVENT_MAP, ELEMENT_VALUE_MAP } from '../constants'
import { get, resolve, set, unset } from '../utils'
import { resolveFlattenFields } from '../utils/reslve-flatten-fields'
import { useDefaultValues } from './use-default-values'

export function useControl<
  Values extends StructValues,
  Context = any,
  TransformedValues extends StructValues = Values,
>(
  props: FormProps<Values, Context, TransformedValues>,
  values: Ref<Values>,
  state: State<Values>,
  names: Set<InternalFieldName>,
) {
  const context = reactive(props.context || {} as any)
  const defaultValues = useDefaultValues(values)
  const fields = reactive({} as Fields<Values>)

  function _mergeNames(name?: InternalFieldName | InternalFieldName[]) {
    return (toArray(name) || Array.from(names)) as ValuePath<Values>[]
  }

  async function _resetDefaultValues() {
    resolve(props.defaultValues, {
      onPromiseStart: () => state.form.isLoading = true,
      onPromiseEnded: () => state.form.isLoading = false,
      onResolved: (result: any) => defaultValues.value = result,
    })
  }

  async function _runSchema(name?: InternalFieldName[]) {
    set(state.fields, `${name}.isValidating`, true)
    const names = _mergeNames(name)
    const options = {
      names,
      fields: resolveFlattenFields(names, fields),
      shouldUseNativeValidation: props.shouldUseNativeValidation,
      criteriaMode: props.criteriaMode,
    }
    const result = await props.resolver?.(
      values.value,
      context,
      options,
    )
    set(state.fields, `${name}.isValidating`, false)
    return {
      values: cloneDeep(result?.values || values.value),
      errors: result?.errors || {},
    }
  }

  function _updateStateErrors(errors: any) {
    for (const name of names) {
      const error = get(errors, name)
      error
        ? set(state.fields, `${name}.error`, error)
        : unset(state.fields, `${name}.error`)
      set(state.fields, `${name}.isTouched`, true)
      set(state.fields, `${name}.invalid`, !!error)
    }
  }

  async function _executeSchemaAndUpdateState(names?: InternalFieldName[]) {
    names = _mergeNames(names)
    const { errors, values } = await _runSchema(names)

    _updateStateErrors(errors)

    return { values }
  }

  async function onChange(event: any) {
    const nextValue = event?.target?.value ?? event?.target?.checked ?? event
    const fieldName = event?.name ?? event?.target?.name
    const fieldState = get(state.fields, fieldName) as FieldState
    const isBlurEvent = event?.type === 'blur' || event?.type === 'focusout'

    const shouldRevalidate = fieldState.isTouched && props.reValidateMode === 'onChange'
    const shouldTrigger = props.mode === 'onChange' || (props.mode === 'onBlur' && isBlurEvent) || shouldRevalidate

    fieldState.isDirty = nextValue !== get(defaultValues.value, fieldName)

    set(values.value, fieldName, nextValue)
    shouldTrigger && trigger(fieldName)
  }

  async function trigger(name?: ValuePath<Values> | ValuePath<Values>[], options?: TriggerConfig): Promise<boolean> {
    const names = _mergeNames(name)
    if (!props.resolver)
      return true

    await _executeSchemaAndUpdateState(names)

    if (options?.shouldFocus)
      _focusError()

    return state.form.isValid
  }

  function _focusError() {
    if (!props.shouldFocusError)
      return
    for (const name of names) {
      if (!get(state.form.errors, name))
        continue
      focus(name as ValuePath<Values>)
    }
  }

  function focus(name: ValuePath<Values>, options?: FocusOptions) {
    const field = get(fields, name)
    const ref = field._f.ref
    if (!ref)
      return
    options?.shouldSelect ? ref.select?.() : ref.focus?.()
  }

  function register(name: ValuePath<Values>, options?: RegisterOptions) {
    if (get(fields, name))
      return get(fields, name)._p

    const _f = reactive({
      ref: ref(),
      name,
      mount: false,
      refs: {},
    })
    const $props = {
      ref: (ref: any, refs: any) => {
        _f.ref = ref
        _f.refs = refs
        _f.mount = true
      },
      value: computed(() => get(values.value, name)),
      onChange: (event: any) => onChange(Object.assign(event, { name })),
      onBlur: (event: any) => onChange(Object.assign(event, { name })),
      disabled: options?.disabled,
      max: options?.max,
      maxLength: options?.maxLength,
      min: options?.min,
      minLength: options?.minLength,
      pattern: options?.pattern,
      required: options?.required,
    }

    const _p = reactiveComputed(() => {
      if (isBrowser() && _f.ref instanceof Element) {
        const TAG_NAME = (Reflect.get(_f.ref, 'type') || _f.ref.tagName).toUpperCase() as ElementMapKey
        return {
          [ELEMENT_VALUE_MAP[TAG_NAME] || 'value']: $props.value,
          [ELEMENT_EVENT_MAP[TAG_NAME] || 'onInput']: $props.onChange,
          ref: $props.ref,
          name,
          onBlur: $props.onBlur,
        }
      }

      if (_f.ref?.controller) {
        return {
          value: $props.value,
          onChange: $props.onChange,
          ref: $props.ref,
          name,
          onBlur: $props.onBlur,
        }
      }

      return {
        'modelValue': $props.value,
        'onUpdate:modelValue': $props.onChange,
        'ref': $props.ref,
        'name': name,
        'onBlur': $props.onBlur,
      }
    })

    const field = reactive<any>({ _f, _p })

    names.add(name)
    set(fields, name, field)

    return field._p
  }

  function unregister(name: ValuePath<Values>, options: UnregisterOptions = {}) {
    names.delete(name)

    if (!options.keepValue)
      unset(values.value, name)

    !options.keepError && unset(state.fields, `${name}.error`)
    !options.keepDirty && set(state.fields, `${name}.isDirty`, false)
    !options.keepTouched && set(state.fields, `${name}.isTouched`, false)
    !options.keepIsValidating && set(state.fields, `${name}.isValidating`, false)
    !props.shouldUnregister && !options.keepDefaultValue && unset(defaultValues.value, name)
  }

  function update<FieldName extends ValuePath<Values> = ValuePath<Values>>(
    name: FieldName,
    value: ValuePathValue<Values, FieldName>,
    options?: UpdateOptions<ValuePathValue<Values, FieldName>>,
  ) {
    set(values.value, name, value)
    options?.shouldDirty && set(state.fields, `${name}.isDirty`, true)
    options?.shouldTouch && set(state.fields, `${name}.isTouched`, true)
    options?.shouldValidate && trigger(name)
  }

  function reset(
    _values?: DefaultValues<Values> | Values | ResetAction<Values>,
    options?: KeepStateOptions,
  ) {
    const resolved = resolve(_values, { args: [values.value] })
    const nextValues = cloneDeep(resolved || defaultValues.value)

    if (!options?.keepDefaultValues)
      defaultValues.value = nextValues

    if (!options?.keepValues) {
      if (options?.keepDirtyValues) {
        for (const name of names) {
          get(state.form.dirtyFields, name)
            ? set(nextValues, name, get(values.value, name))
            : set(values.value, name, get(nextValues, name))
        }
      }
      else {
        if (isBrowser() && !_values) {
          for (const name of names) {
            const ref = get(fields, `${name}._f.ref`)
            if (isElement(ref)) {
              const form = ref.closest('form')
              if (form) {
                form.reset()
                break
              }
            }
          }
        }
      }
    }

    values.value = props.shouldUnregister
      ? options?.keepDefaultValues
        ? cloneDeep(defaultValues.value)
        : {}
      : nextValues

    for (const name of names) {
      const fieldState = get(fields, name)
      set(state.fields, name, {
        isValidating: options?.keepIsValidating ? fieldState.isValidating : false,
        isValid: options?.keepIsValid ? fieldState.isValid : false,
        isDirty: options?.keepDirty ? fieldState.isDirty : false,
        isTouched: options?.keepTouched ? fieldState.isTouched : false,
        error: options?.keepErrors ? fieldState.error : undefined,
      })
    }

    Object.assign(state.form, {
      isSubmitted: options?.keepIsSubmitted ? state.form.isSubmitted : false,
      isSubmitSuccessful: options?.keepIsSubmitSuccessful ? state.form.isSubmitSuccessful : false,
      submitCount: options?.keepSubmitCount ? state.form.submitCount : 0,
    })
  }

  function resetField<FieldName extends ValuePath<Values> = ValuePath<Values>>(name: FieldName, options?: ResetFieldConfig<ValuePathValue<Values, FieldName>>) {
    if (!get(fields, name))
      return
    if (options?.defaultValue) {
      set(values.value, name, options.defaultValue)
      set(defaultValues.value, name, options.defaultValue)
    }
    else {
      set(values.value, name, get(defaultValues.value, name))
    }

    if (!options?.keepDirty)
      unset(state.fields, `${name}.isDirty`)
    if (!options?.keepTouched)
      unset(state.fields, `${name}.isTouched`)
    if (!options?.keepError)
      unset(state.fields, `${name}.error`)
  }

  function setError(name: ValuePath<Values> | `root.${string}` | 'root', error: FieldError, options?: { shouldFocus?: boolean }) {
    const ref = get(fields, name)?._f?.ref
    set(state.form.errors, name, error)
    options?.shouldFocus && ref.focus?.()
  }
  function clearError(name?: ValuePath<Values> | ValuePath<Values>[] | `root.${string}` | 'root') {
    for (const _name of _mergeNames(name))
      unset(state.form.errors, _name)
  }

  function handleSubmit(
    onValid: SubmitHandler<TransformedValues>,
    onInvalid?: SubmitErrorHandler<Values>,
  ) {
    return async (e: any) => {
      let onValidError

      if (e) {
        e.preventDefault?.()
        e.persist?.()
      }
      state.form.isSubmitting = true

      const { values, errors } = await _runSchema()

      _updateStateErrors(errors)
      // TODO: Disable fields
      // if (names.disabled.size) {
      //   for (const name of names.disabled) {
      //     unset(values, name);
      //   }
      // }

      unset(state.form.errors, 'root')

      if (state.form.isValid) {
        try {
          await onValid(values as TransformedValues, e)
        }
        catch (error) {
          onValidError = error
        }
      }
      else {
        if (onInvalid)
          await onInvalid({ ...state.form.errors }, e)
        _focusError()
        setTimeout(_focusError)
      }

      state.form.isSubmitting = false
      state.form.isSubmitted = true
      state.form.isSubmitSuccessful = state.form.isValid
      state.form.submitCount++

      if (onValidError)
        throw onValidError
    }
  }

  const control: Control<Values, Context, TransformedValues> = {
    _runSchema,
    _resetDefaultValues,

    defaultValues: defaultValues as any,
    state: state as any,
    fields: fields as any,

    trigger,
    register,
    unregister,
    update,
    focus,

    reset,
    setError,
    clearError,
    handleSubmit,
    resetField,

    names,
    options: props,
  }

  return reactive(control) as Control<Values, Context, TransformedValues>
}
