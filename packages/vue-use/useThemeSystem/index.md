---
title: createThemeSystem
category: 'vue-use'
---
## @hairy/vue-use - createThemeSystem

创建一个基于注入的主题系统

## Usage

```typescript
import { createThemeSystem } from '@hairy/vue-use'

export const { defaultTheme, injectTheme, provideTheme, useThemeCssVariables, useThemeEditorConfig, __THEME_KEY__ } = createThemeSystem({
  Button: {
    bgColor: '#fff',
    borderColor: '#000',
    textColor: 'red'
  }
})

// 1. 应用注入默认主题配置（main.ts）
app.provide(__THEME_KEY__, defaultTheme)

// 2. 在某个地方更改并再次合并注入（App.vue）
const overrideTheme = ref({
  Button: { bgColor: 'red' }
})
provideTheme(overrideTheme)

// 3. 在某个组件/页面中使用主题
const theme = injectTheme()
theme.value.Button.bgColor // 'red'

// 或者使用 useThemeCssVariables 挂载到某个元素中
useThemeCssVariables(document.body, 'button.bgColor')
// <body style="--button-bg-color: red;"></body>

// 创建一个可编辑列表, 跟 overrides 联动

const { config, overrides } = useThemeEditorConfig()
config['Button'][0].name // button-bg-color
config['Button'][0].paths // ['Button', 'bgColor']
config['Button'][0].source // overrides.Button.bgColor
config['Button'][0].value // ''

config['Button'][0].value = '#fff'

overrides.value.Button?.bgColor // '#fff'

// 将更改的值注入
provideTheme(overrides)
```