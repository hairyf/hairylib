import { Linter } from 'eslint'
/**
 * @author: Mr.Mao
 * @description: React eslint options
 * @module eslint-plugin-react
 */
export const react: Linter.Config = {
  extends: ['plugin:react/recommended'],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  parserOptions: {
    ecmaFeatures: { jsx: true }
  }
}
