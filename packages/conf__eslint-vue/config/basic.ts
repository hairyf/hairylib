import { Linter } from 'eslint'
import { merge } from 'lodash'
/**
 * @author: Mr.Mao
 * @description: Vue eslint options
 * @module vue-eslint-parser
 * @module eslint-plugin-vue
 */
const basic: Linter.Config = {
  rules: {
    'vue/no-unused-vars': 'warn',
    'vue/require-valid-default-prop': 'warn'
  },
  plugins: ['vue'],

  // fix eslint in .tsx no effect
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaFeatures: { jsx: true }
      }
    }
  ]
}

export const vue2 = merge<Linter.Config, Linter.Config>(basic, {
  extends: ['plugin:vue/recommended']
})

export const vue3 = merge<Linter.Config, Linter.Config>(basic, {
  extends: ['plugin:vue/vue3-recommended']
})
