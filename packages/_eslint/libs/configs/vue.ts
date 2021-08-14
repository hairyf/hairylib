import { Linter } from 'eslint'
/**
 * @author: Mr.Mao
 * @description: Vue eslint options
 * @module vue-eslint-parser
 * @module eslint-plugin-vue
 */
export const vue2: Linter.Config = {
  parser: 'vue-eslint-parser',
  extends: ['plugin:vue/recommended'],
  rules: {
    'vue/html-self-closing': 'off'
  }
}
/**
 * @author: Mr.Mao
 * @description: Vue eslint options
 * @module vue-eslint-parser
 * @module eslint-plugin-vue
 */
export const vue3: Linter.Config = {
  parser: 'vue-eslint-parser',
  extends: ['plugin:vue/vue3-recommended'],
  rules: {
    'vue/html-self-closing': 'off'
  }
}
