import type { Component, PropType, VNode } from 'vue-demi'
import { defineComponent, h } from 'vue-demi'

export const Field = defineComponent({
  name: 'Field',
  props: {
    is: {
      type: [String, Number, Object] as PropType<string | number | VNode | Component>,
      default: '',
    },
  },
  setup(props) {
    return () => {
      if (typeof props.is === 'string' || typeof props.is === 'number')
        return props.is
      return props.is ? h(props.is) : null
    }
  },
})
