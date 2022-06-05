---
category: 'Project Configuration'
---

# Eslint Config

- 单引号，没有半引号
- 自动修复格式化（旨在没有 Prettier 的情况下独立使用）
- TypeScript、Vue、React 开箱即用
- Lint 也适用于 json、yaml、markdown
- 排序导入，悬空逗号以获得​​更清晰的提交差异
- 合理的默认值，最佳实践，只有一行配置

## Usage

### Install

```
pnpm add -D eslint @hairy/eslint-config
```

### Config .eslintrc / .eslintrc.js

```json
{
  "extends": "@hairy/eslint-config"
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
import mergeConfig from '@hairy/config/merge'
```
