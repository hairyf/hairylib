import { Linter } from 'eslint'
export const basic: Linter.Config = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2021
  },
  extends: ['eslint:recommended'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 使用单引号
    quotes: [1, 'single'],
    // 禁止使用var表达式
    'no-var': 1,
    // 未修改变量不允许使用let定义
    'prefer-const': 1,
    // 对象属性需简写
    'object-shorthand': 1,
    // 禁止不必要的嵌套 const isYes = answer === 1 ? true : false;
    'no-unneeded-ternary': 2,
    // 回调中使用箭头
    'prefer-arrow-callback': 1,
    // 禁止在条件中使用常量表达式 if(true) if(1)
    'no-constant-condition': 2,
    // 如果if语句里面有return,后面不能跟else语句
    'no-else-return': 1,
    // 禁止超过三层的回调调用
    'max-nested-callbacks': ['error', 3],
    // 允许任意全局变量
    'no-undef': 0
  }
}
