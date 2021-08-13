import { Linter } from 'eslint'
export const vueBasic: Linter.Config = {
  extends: [
    // '@vue/typescript/recommended', // @vue/eslint-config-typescript
    // '@vue/prettier', // @vue/eslint-config-prettier
    // '@vue/prettier/@typescript-eslint' // @vue/eslint-config-prettier, @typescript-eslint/eslint-plugin
  ],
  rules: {}
}

export const vue2: Linter.Config = {
  extends: [
    'plugin:vue/recommended' // eslint-plugin-vue
  ]
}

export const vue3: Linter.Config = {
  extends: [
    'plugin:vue/vue3-recommended' // eslint-plugin-vue
  ]
}
