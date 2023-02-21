---
category: '@eslint'
---

# Eslint Config Basic

Eslint 的基础配置，包含内容：json、yaml、markdown、javascript

### Install

```
pnpm add -D eslint @hairy/eslint-basic
```

### Config .eslintrc / .eslintrc.js

```json
{
  "extends": "@hairy/eslint-basic"
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
import mergeConfig from '@hairy/eslint-basic/merge'
```