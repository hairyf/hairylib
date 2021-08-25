<template>
  <div class="t-grid__container">
    <div class="t-grid__item"></div>
  </div>
</template>
<script lang="ts">
  import { analyUnit, analySize } from '@tuimao/core'
  import { defineComponent, useCssVars } from 'vue'
  import type { PropType } from 'vue'
  import type { AnalySizeOption } from '@tuimao/core'
  export default defineComponent({ name: 'CalGrid' })
</script>
<script lang="ts" setup>
  import { defineProps } from 'vue-demi'
  const props = defineProps({
    /** 子元素大小 */
    size: {
      type: [Number, String, Array, Object] as PropType<AnalySizeOption>,
      required: true
    },
    gap: {
      type: [Number, String],
      default: 24
    },
    justifyContent: {
      type: String,
      default: 'center'
    },
    alignItems: {
      type: String,
      default: 'initial'
    }
  })
  useCssVars(() => ({
    ...analySize(props.size),
    gap: analyUnit(props.gap),
    'justify-content': props.justifyContent,
    'align-items': props.alignItems
  }))
</script>

<style lang="scss">
  .cal-grid__view {
    display: grid;
    grid-template-columns: repeat(auto-fill, var(--width));
    gap: var(--gap);
    justify-content: var(--justify-content);
    align-items: var(--align-items);
    & > * {
      height: var(--height);
    }
  }
</style>
