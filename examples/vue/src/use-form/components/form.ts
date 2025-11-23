import Form from './form.vue'

/**
 * Form component to manage submission.
 *
 * @param props - to setup submission detail. {@link FormProps}
 *
 * @returns form component or headless render prop.
 *
 * @example
 * ```vue
 * <script setup lang="ts">
 *   const { control, register, errors } = useForm();
 * </script>
 *
 * <template>
 *   <form action="/api" v-bind="control">
 *     <input v-bind="register('name')" />
 *     <p>{{ errors?.root?.server && 'Server error' }}</p>
 *     <button>Submit</button>
 *   </form>
 * </template>
 * ```
 */
export default Form
