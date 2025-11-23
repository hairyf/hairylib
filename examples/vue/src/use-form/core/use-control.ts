import type { Ref } from 'vue'
import type { ElementMapKey } from '../constants'
import type { Control, DefaultValues, FieldName, Fields, FieldState, FocusOptions, FormProps, InternalFieldName, State, StructValues, UnregisterOptions, UpdateOptions } from '../types'
import type { ValuePath, ValuePathValue } from '../types/path'
import type { TriggerConfig } from '../types/trigger'
import { cloneDeep, isBrowser, isFunction, toArray } from '@hairy/utils'
import { reactiveComputed } from '@vueuse/core'
import { computed, reactive, ref } from 'vue'
import { ELEMENT_EVENT_MAP, ELEMENT_VALUE_MAP } from '../constants'
import { get, set, unset } from '../utils'
import { resolveFlattenFields } from '../utils/reslve-flatten-fields'

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
  const defaultValues = ref({} as unknown as DefaultValues<Values>)
  const fields = reactive({} as Fields<Values>)

  function setDefaultValues(_values: DefaultValues<Values>) {
    defaultValues.value = _values
    values.value = cloneDeep(_values) as Values
  }

  async function _resetDefaultValues() {
    if (isFunction(props.defaultValues)) {
      const result = props.defaultValues()
      if (!(result instanceof Promise)) {
        setDefaultValues(result)
      }
      else {
        state.form.isLoading = true
        result.then(setDefaultValues)
        result.finally(() => state.form.isLoading = false)
      }
    }
    else {
      setDefaultValues(cloneDeep(props.defaultValues) as DefaultValues<Values>)
    }
  }

  async function _runSchema(name?: InternalFieldName[]) {
    set(state.fields, `${name}.isValidating`, true)
    const _names = name || Array.from(names)
    const result = await props.resolver?.(
      values.value,
      context,
      {
        fields: resolveFlattenFields(_names, fields),
        shouldUseNativeValidation: props.shouldUseNativeValidation,
        criteriaMode: props.criteriaMode,
        names: _names as FieldName<Values>[],
      },
    )
    set(state.fields, `${name}.isValidating`, false)
    return result || { values: {}, errors: {} }
  }

  async function _executeSchemaAndUpdateState(names_?: InternalFieldName[]) {
    const _names = names_ || Array.from(names)
    const { errors } = await _runSchema(_names)
    for (const name of _names) {
      const error = get(errors, name)
      error
        ? set(state.fields, `${name}.error`, error)
        : unset(state.fields, `${name}.error`)
      set(state.fields, `${name}.isTouched`, true)
      set(state.fields, `${name}.invalid`, !!error)
    }
    return errors
  }

  async function onChange(event: any) {
    const nextValue = event?.target?.value ?? event?.target?.checked ?? event
    const name = event?.name ?? event?.target?.name
    const fieldState = get(state.fields, name) as FieldState

    fieldState.isDirty = nextValue !== get(defaultValues.value, name)

    set(values.value, name, nextValue)

    if (
      props.mode === 'onChange'
      || (fieldState.isTouched && props.reValidateMode === 'onChange')
    ) {
      trigger(name)
    }
  }

  async function trigger(name?: ValuePath<Values> | ValuePath<Values>[], options?: TriggerConfig): Promise<boolean> {
    const _names = toArray(name) || Array.from(names)
    if (!props.resolver)
      return true
    const errors = await _executeSchemaAndUpdateState(_names as InternalFieldName[])
    const isValid = state.form.isValid = Object.keys(errors).length === 0

    if ((props.shouldFocusError || options?.shouldFocus) && !isValid) {
      for (const name of names) {
        if (get(fields, `${name}.error`)) {
          focus(name as ValuePath<Values>)
          break
        }
      }
    }

    return isValid
  }

  function focus(name: ValuePath<Values>, options?: FocusOptions) {
    const field = get(fields, name)
    const ref = field._f.ref
    if (!ref)
      return
    options?.shouldSelect ? ref.select?.() : ref.focus?.()
  }

  function register(name: ValuePath<Values>) {
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
    options?: UpdateOptions,
  ) {
    set(values.value, name, value)
    options?.shouldDirty && set(state.fields, `${name}.isDirty`, true)
    options?.shouldTouch && set(state.fields, `${name}.isTouched`, true)
    options?.shouldValidate && trigger(name)
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

    reset: undefined as any,
    clearError: undefined as any,
    handleSubmit: undefined as any,
    resetField: undefined as any,
    setError: undefined as any,

    names,
    options: props,
  }

  return reactive(control) as Control<Values, Context, TransformedValues>
}
