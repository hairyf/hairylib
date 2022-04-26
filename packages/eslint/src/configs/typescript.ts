import { Linter } from 'eslint'
import * as rules from '../rules'
/**
 * @author: Mr.Mao
 * @description: Typescript eslint options
 * @module eslint-plugin-import
 * @module _typescript-eslint/parser
 * @module _typescript-eslint/eslint-plugin
 */
export const typescript: Linter.Config = {
  parserOptions: {
    parser: '@typescript-eslint/parser',
    jsx: true,
    ecmaFeatures: { jsx: true }
  },
  plugins: ['@typescript-eslint'],
  extends: [
    // 各类定义好的检测Typescript代码的规范(@typescript-eslint/eslint-plugin)
    'plugin:@typescript-eslint/recommended',
    // ts 模块化语法规则 (eslint-plugin-import)
    'plugin:import/typescript'
  ],
  rules: {
    ...rules.typescript
  }
}
