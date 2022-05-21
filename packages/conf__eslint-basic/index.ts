import { Linter } from 'eslint'
import * as rules from './rules'

/**
 * @author: Mr.Mao
 * @description: Basic eslint options
 * @module eslint
 * @module eslint-plugin-import
 * @module eslint-plugin-eslint-comments
 * @module eslint-plugin-jsonc
 * @module eslint-plugin-yml
 * @module eslint-plugin-html
 * @module eslint-plugin-markdown
 * @module eslint-plugin-unicorn
 */
const basic: Linter.Config = {
  env: {
    es6: true,
    browser: true,
    node: true
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
    // 关于 md 的格式规则（eslint-plugin-markdown）
    'plugin:markdown/recommended',
    // 更加漂亮的代码规则 (eslint-config-prettier eslint-plugin-prettier prettier)
    'plugin:prettier/recommended'
  ],
  ignorePatterns: [
    '*.min.*',
    'CHANGELOG.md',
    'dist',
    'LICENSE*',
    'output',
    'coverage',
    'public',
    'temp',
    'packages-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
    '!.github',
    '!.vitepress',
    '!.vscode'
  ],
  plugins: [
    // prettier 插件
    'prettier',
    // 关于 html 的规则
    'html',
    // 一些很棒的 eslint 规则
    'unicorn'
  ],
  rules: {
    ...rules.commons,
    ...rules.imports,
    ...rules.unicorn,
    ...rules.prettier
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] }
    }
  },
  overrides: [
    {
      files: ['*.json', '*.json5'],
      parser: 'jsonc-eslint-parser',
      rules: rules.jsonc
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: rules.jsoncPackage
    }
  ]
}

export = basic
