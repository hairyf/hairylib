import { Linter } from 'eslint'
import { merge } from 'lodash-es'

const basic: Linter.Config = {
  rules: {
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-indent': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/require-default-prop': 'off',
    'vue/html-closing-bracket-newline': 'off',
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

/**
 * @author: Mr.Mao
 * @description: Vue eslint options
 * @module vue-eslint-parser
 * @module eslint-plugin-vue
 */
export const vue2 = merge<Linter.Config, Linter.Config>(basic, {
  extends: ['plugin:vue/recommended']
})

/**
 * @author: Mr.Mao
 * @description: Vue eslint options
 * @module vue-eslint-parser
 * @module eslint-plugin-vue
 */
export const vue3 = merge<Linter.Config, Linter.Config>(basic, {
  extends: ['plugin:vue/vue3-recommended']
})
