# @tuimao/vue-directive

vue 自定义命令集

## Install

`yarn add @tuimao/vue-directive`


## Rules

- 数值可传入数值或字符串, 最终将转换为携带单位的值, 例如下方的结果是一致的
  ~~~html
  <!-- width: 100px -->
  <div v-w="100" />
  <div v-w="'100px'" />
  ~~~
- 尺寸的规则, 尺寸可传入类型分别为 string|number, array, object, 为以下效果
  ~~~html
  <!-- width: 100px; height: 100px -->
  <div v-size="100" />
  <!-- width: 100px; height: 120px -->
  <div v-size="[100, 120]" />
  <!-- width: 100px; -->
  <div v-size="{width: 100}" />
  ~~~
- 颜色的规则, 颜色可传入 Argument , 也可传入 value
  ~~~html
  <div v-color:red />
  <div v-color="true ? 'red' : '#fff'" />
  ~~~
## Global usage

引入至全局使用

~~~typescript
import { createApp } from 'vue'
import directives from '@tuimao/vue-directive'

const app = createApp(App)

app.use(directives)

app.mount()
~~~

~~~html
<!-- width: 100px; height: 100px; -->
<div v-size="100" />
<!-- width: 100px; height: 120px; -->
<div v-size="[100, 120]" />
~~~

## Alone usage

单独使用

~~~html
<template>
  <div v-py="10"></div>
  <div v-m="5"></div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue-demi'
  import { vSpace } from '@tuimao/vue-directive'
  export default defineComponent({
    directives: {
      ...vSpace
    }
  })
</script>
~~~

## All directive

所有的自定义命令

### Utils directive

~~~html
<input v-focus />
<input v-has="['user']" />
~~~

### Variant directive
~~~html
<!-- size -->
<div v-size="100" />

<!-- font -->
<div v-font:weight="100" />
<div v-font:size="100" />
<div v-font:size="[100, 52]" />

<!-- color -->
<div v-color:red />
<div v-bg:white />
<div v-border-color:#000 />
<div v-border-t-color:#000 />
<div v-border-r-color:#000 />
<div v-border-b-color:#000 />
<div v-border-l-color:#000 />
~~~

### Tailwind directive
~~~html
<!-- size -->
<div v-w="20" />
<div v-h="20" />
<div v-min-w="20" />
<div v-min-h="20" />
<div v-max-w="20" />
<div v-max-h="20" />

<!-- space -->
<div v-p="20" />
<div v-pt="20" />
<div v-pr="20" />
<div v-pb="20" />
<div v-pl="20" />
<div v-px="20" />
<div v-py="20" />
<div v-m="20" />
<div v-mt="20" />
<div v-mr="20" />
<div v-mb="20" />
<div v-ml="20" />
<div v-mx="20" />
<div v-my="20" />

<!-- layout -->
<div v-inset="1" />
<div v-inset-y="1" />
<div v-inset-x="1" />
<div v-top="1" />
<div v-left="1" />
<div v-right="1" />
<div v-bottom="1" />
<div v-z="1" />

<!-- grid -->
<div v-gap="20" />
<div v-gap-x="20" />
<div v-gap-y="20" />

<!-- border -->
<div v-rounded="20" />
<div v-rounded-t="20" />
<div v-rounded-r="20" />
<div v-rounded-b="20" />
<div v-rounded-l="20" />
<div v-rounded-tl="20" />
<div v-rounded-tr="20" />
<div v-rounded-br="20" />
<div v-rounded-bl="20" />
<div v-border="20" />
<div v-border-t="20" />
<div v-border-r="20" />
<div v-border-b="20" />
<div v-border-l="20" />
~~~


## Utils

- directiveUnit:  创建命令, 对应 style 中的 key value 设置
- directiveSize:  创建命令, 对应 style.width, style.height 中的 key value 设置
- directiveValue: 创建命令, 对应 style 中的 key value 设置
- directiveValue: 创建命令, 对应 style 中的 key value 设置, value 不会进行处理, 而是直接赋值
- directiveArgumentValue: 创建命令, 对应 style 中的 key value 设置

## permissions

权限的配置使用 defineDirectiveConfig 配置

~~~typescript

import { defineDirectiveConfig } from '@tuimao/vue-directive'

defineDirectiveConfig({
  permissions: ['edit', 'lock']
})
~~~