# @tuimao/eslint

eslint 的规则集，包含了 vue | ts | uni 的规则。

## install

`npm install eslint @tuimao/eslint -D`

## use


1. 编写 `prettier` 规则 `package.json`（其余方式引入都可使用：`.prettierrc|prettier.config.js`） 

~~~js
{
    "prettier": "@tuimao/eslint/prettier"
}
~~~

2. 编写 eslint 规则`package.json`（其余方式引入都可使用：`.eslintrc|.eslintrc.js`）

~~~js
{
    "eslintConfig": {
        "extends": ["@tuimao/eslint/ts-vue@2"]
    }
}
~~~

## Eslint extends options

所有 eslint 的配置集

- all			         ：`@tuimao/eslint/all`
- typescript       ：`@tuimao/eslint/typescript`
- ts-react           ：`@tuimao/eslint/ts-react`
- ts-uni-vue@2 ：`@tuimao/eslint/ts-uni-vue@2`
- ts-vue@2        ：`@tuimao/eslint/ts-vue@2`
- ts-vue@3        ：`@tuimao/eslint/ts-vue@3`

## modules

对应模块使用的依赖包和描述

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

### Typescript eslint

~~~typescript
/**
 * @author: Mr.Mao
 * @description: Typescript eslint options
 * @module eslint-plugin-import
 * @module @typescript-eslint/parser
 * @module @typescript-eslint/eslint-plugin
 */
~~~

### React eslint

~~~typescript
/**
 * @author: Mr.Mao
 * @description: React eslint options
 * @module eslint-plugin-react
 */
~~~

### Vue eslint

~~~typescript
/**
 * @author: Mr.Mao
 * @description: Vue eslint options
 * @module vue-eslint-parser
 * @module eslint-plugin-vue
 */
~~~

### Uni eslint

~~~typescript
/**
 * @author: Mr.Mao
 * @description: UniApp eslint options
 */
~~~

