/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2021-01-07 10:12:14
 * @LastEditTime: 2021-06-08 14:36:19
 * @Description: 
 * 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
const defaultRules = require('./rules/default');
const typescriptRules = require('./rules/typescript');
module.exports = {
  extends: [
    "plugin:vue/vue3-essential", // eslint-plugin-vue
    "eslint:recommended", // eslint
    "@vue/typescript/recommended", // @vue/eslint-config-typescript
    "@vue/prettier", // @vue/eslint-config-prettier
    "@vue/prettier/@typescript-eslint", // @vue/eslint-config-prettier, @typescript-eslint/eslint-plugin
  ],
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    ...defaultRules,
    ...typescriptRules,
    // 允许空定义, 兼容 vue setup 写法
    '@typescript-eslint/no-unused-vars': 0,
    // 允许 require 引入
    '@typescript-eslint/no-var-requires': 0
  },
};
