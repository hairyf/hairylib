import type { Ref } from '@vue/reactivity'

declare namespace React {

  interface RefAttributes {
    ref?: Ref<T>
  }
}
