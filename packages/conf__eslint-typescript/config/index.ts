import { Linter } from 'eslint'

/**
 * @author: Mr.Mao
 * @description: Typescript eslint options
 * @module eslint-plugin-import
 * @module _typescript-eslint/parser
 * @module _typescript-eslint/eslint-plugin
 */
const typescript: Linter.Config = {
  extends: [
    // 各类定义好的检测Typescript代码的规范(@typescript-eslint/eslint-plugin)
    'plugin:@typescript-eslint/recommended',
    // ts 模块化语法规则 (eslint-plugin-import)
    'plugin:import/typescript'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    jsx: true,
    ecmaFeatures: { jsx: true }
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-extra-semi': 'off'
  }
}

export = typescript
