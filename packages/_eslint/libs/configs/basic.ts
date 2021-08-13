import { Linter } from 'eslint'
import * as rules from '../rules'
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
    'html',
    // 一些很棒的 eslint 规则
    'unicorn'
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs', '.ts', '.d.ts'] }
    }
  },
  extends: [
    // eslint 推荐规则 (eslint)
    'eslint:recommended',
    // es5+ 模块化语法规则 (eslint-plugin-import)
    'plugin:import/recommended',
    // 禁用 eslint 的注释规则 (eslint-plugin-eslint-comments)
    'plugin:eslint-comments/recommended',
    // 关于 json 与 jsonc 的格式规则 (eslint-plugin-jsonc)
    'plugin:jsonc/recommended-with-jsonc',
    // 关于 yaml 的格式规则 (eslint-plugin-yml)
    'plugin:yml/standard',
    // 更加漂亮的代码规则 (eslint-config-prettier eslint-plugin-prettier prettier)
    'plugin:prettier/recommended'
  ],
  rules: {
    ...rules.commons,
    ...rules.imports,
    ...rules.unicorn
  }
}
