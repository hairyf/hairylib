<!--
 * @Author: Mr.Mao
 * @Date: 2021-07-13 11:01:35
 * @LastEditTime: 2021-07-24 15:50:00
 * @Description: 
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
-->
<template>
  <slot />
</template>
<script lang="ts">
  import { computed, defineComponent, defineProps, provide } from 'vue'
  export default defineComponent({ name: 'CalProvides' })
</script>
<script lang="ts" setup>
  const props = defineProps({
    provides: {
      type: Object,
      required: true
    }
  })
  for (const k in props.provides) {
    const v = computed(() => props.provides[k])
    provide(k, v)
  }
</script>

<style lang="scss" scoped></style>
