<template>
  <div class="t-editor">
    <iframe v-if="disabled" class="t-editor--disabled" :srcdoc="content" />
    <tinymce-editor
      v-else
      v-model="content"
      class="t-tinymce-editor"
      api-key="aes3zocor6cpx2x0geyur75jd26mo4y2bnfr12afozutujiw"
      :init="options"
    />
  </div>
</template>
<script lang="ts">
  export default defineComponent({ name: 'Editor' })
</script>
<script lang="ts" setup>
  import type { RawEditorSettings } from 'tinymce'
  import TinymceEditor from '@tinymce/tinymce-vue'
  import { useVModel } from '@vueuse/core'
  import { defaults } from 'lodash-es'
  import { defineComponent, computed, defineProps } from 'vue'
  const props = defineProps({
    modelValue: {
      type: String,
      default: ''
    },
    disabled: Boolean,
    options: {
      type: Object as () => RawEditorSettings,
      default: () => ({})
    }
  })
  const content = useVModel(props, 'modelValue')
  const options = computed(() => {
    return defaults(props.options, {
      skin: false,
      content_css: false,
      language_url:
        'https://client-static-1254212114.cos.ap-guangzhou.myqcloud.com/script/tinymce_zh_CN.js',
      language: 'zh_CN'
    })
  })
</script>

<style scoped>
  .t-editor--disabled,
  .t-tinymce-editor {
    width: 100%;
    height: 100%;
  }
</style>
