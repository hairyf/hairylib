---
title: '@hairy/eslint'
category: 'Config'
---

# @hairy/eslint

eslint 的规则集，包含了 ts-vue | ts-react | ts | ts-uni 的规则。

## Install

`npm install eslint @hairy/eslint -D`

## Usage


1. 编写 `prettier` 规则 `package.json`（其余方式引入都可使用：`.prettierrc|prettier.config.js`） 

~~~js
{
    "prettier": "@hairy/eslint/prettier.js"
}
~~~

2. 编写 eslint 规则`.eslintrc.js`（其余方式引入都可使用：`.eslintrc|.eslintrc.js`）

~~~js
module.exports = require('@hairy/eslint/typescript.js')
~~~

## Eslint extends options

所有 eslint 的配置集

- all:			     `@hairy/eslint/all`
- typescript:    `@hairy/eslint/typescript`
- ts-react:      `@hairy/eslint/ts-react`
- ts-uni-vue@2:  `@hairy/eslint/ts-uni-vue@2`
- ts-vue@2:      `@hairy/eslint/ts-vue@2`
- ts-vue@3:      `@hairy/eslint/ts-vue@3`

- javascript:    `@hairy/eslint/javascript`
- js-uni-vue@2:  `@hairy/eslint/js-uni-vue@2`
- js-vue@2:      `@hairy/eslint/js-vue@2`
- js-vue@3:      `@hairy/eslint/js-vue@3`

## modules

对应模块使用的描述信息和依赖包

### Basic eslint

~~~typescript
/**
 * @author: Mr.Mao
 * @description: Basic eslint options
 * @module eslint
 * @module eslint-plugin-import
 * @module eslint-plugin-eslint-comments
 * @module eslint-plugin-jsonc
 * @module eslint-plugin-yml
 * @module eslint-config-prettier
 * @module eslint-plugin-prettier
 * @module prettier
 * @module eslint-plugin-html
 * @module eslint-plugin-unicorn
 */
~~~

### Typescript config

~~~typescript
/**
 * @author: Mr.Mao
 * @description: Typescript eslint options
 * @module eslint-plugin-import
 * @module @typescript-eslint/parser
 * @module @typescript-eslint/eslint-plugin
 */
~~~

### React config

~~~typescript
/**
 * @author: Mr.Mao
 * @description: React eslint options
 * @module eslint-plugin-react
 */
~~~

### Vue config

~~~typescript
/**
 * @author: Mr.Mao
 * @description: Vue eslint options
 * @module vue-eslint-parser
 * @module eslint-plugin-vue
 */
~~~

### Uni config

~~~typescript
/**
 * @author: Mr.Mao
 * @description: UniApp eslint options
 */
~~~
