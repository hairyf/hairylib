import { Linter } from 'eslint'
export const basic: Linter.Config = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  plugins: [
    // 关于 html 的规则
    'html'
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs', '.ts', '.d.ts'] },
    },
  },
  extends: [
    // eslint 推荐规则 (eslint)
    'eslint:recommended',
    // 更加漂亮的代码规则 (eslint-config-prettier eslint-plugin-prettier prettier)
    'plugin:prettier/recommended',
    // es5+ 模块化语法规则 (eslint-plugin-import)
    'plugin:import/recommended',
    // 禁用 eslint 的注释规则 (eslint-plugin-eslint-comments)
    'plugin:eslint-comments/recommended',
    // 关于 json 与 jsonc 的格式规则 (eslint-plugin-jsonc)
    'plugin:jsonc/recommended-with-jsonc',
    // 关于 yaml 的格式规则 (eslint-plugin-yml)
    'plugin:yml/standard'
  ],
  rules: {
    // import
    'import/first': 'error',
    // 'import/no-unresolved': 'off',
    // 'import/no-absolute-path': 'off',

    'prettier/prettier': 'warn',
    'no-debugger': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],

    // 使用单引号
    quotes: ['warn', 'single'],
    // 禁止使用var表达式
    'no-var': 'warn',
    // 未修改变量不允许使用 let 定义
    'prefer-const': 'warn',
    // 对象属性需简写
    'object-shorthand': 'warn',
    // 禁止不必要的嵌套 const isYes = answer === 1 ? true : false;
    'no-unneeded-ternary': 'error',
    // 回调中使用箭头
    'prefer-arrow-callback': 'warn',
    // 禁止在条件中使用常量表达式 if(true) if(1)
    'no-constant-condition': 'error',
    // 如果if语句里面有return,后面不能跟else语句
    'no-else-return': 'warn',
    // 禁止超过三层的回调调用
    'max-nested-callbacks': ['error', 3],
    // 允许任意全局变量
    'no-undef': 'off'
  }
}
