import { Linter } from 'eslint'
import { merge } from 'lodash'

const basic: Linter.Config = {
  parser: 'vue-eslint-parser',
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
  }
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
