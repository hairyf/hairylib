---
category: 'Project Configuration'
---

# Eslint Config Vue2/3

Eslint 的 vue 配置，包含内容：vue2-ts / vue2-js / vue3-ts / vue3-js

- @hairy/eslint-vue           - vue3-ts
- @hairy/eslint-vue/js-vue@2  - vue2-js
- @hairy/eslint-vue/ts-vue@2  - vue2-ts
- @hairy/eslint-vue/js-vue@3  - vue3-js
- @hairy/eslint-vue/ts-vue@3  - vue3-ts

### Install

```
pnpm add -D eslint @hairy/eslint-vue
```

### Config .eslintrc / .eslintrc.js

```json
{
  "extends": "@hairy/eslint-vue"
}
```

### Add script for package.json

For example:
```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Config VS Code auto fix

create .vscode/settings.json

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### Usage Merge

Merge 配置将需要安装包内依赖内容，不建议使用，这是 eslint 当前所存在的问题。

```js
import mergeConfig from '@hairy/eslint-vue/merge'
```