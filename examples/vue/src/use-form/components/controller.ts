import Controller from './controller.vue'

/**
 * Component based on `useController` hook to work with controlled component.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usecontroller/controller) • [Demo](https://codesandbox.io/s/react-hook-form-v6-controller-ts-jwyzw) • [Video](https://www.youtube.com/watch?v=N2UNk_UCVyA)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns provide field handler functions, field and form state.
 *
 * @example
 * ```vue
 * <script setup lang="ts">
 *   const { control } = useForm<FormValues>({
 *     defaultValues: {
 *       test: ""
 *     }
 *   });
 * </script>
 *
 * <template>
 *   <form v-bind="control">
 *     <controller :control="control" name="test" #="{ field: { onChange, onBlur, value, ref }, state }">
 *       <input
 *         @change="onChange"
 *         @blur="onBlur"
 *         :value="value"
 *         ref="ref"
 *       />
 *       <p>{{ state.isSubmitted ? "submitted" : "" }}</p>
 *       <p>{{ state.isTouched ? "touched" : "" }}</p>
 *     </controller>
 *   </form>
 * </template>
 * ```
 */
export default Controller
