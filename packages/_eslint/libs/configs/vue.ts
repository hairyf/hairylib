import { Linter } from 'eslint'
export const vueBasic: Linter.Config = {
  extends: [
    '@vue/typescript/recommended', // @vue/eslint-config-typescript
    '@vue/prettier', // @vue/eslint-config-prettier
    '@vue/prettier/@typescript-eslint' // @vue/eslint-config-prettier, @typescript-eslint/eslint-plugin
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 0
  }
}

export const vue2: Linter.Config = {
  extends: [
    'plugin:vue/essential' // eslint-plugin-vue
  ]
}

export const vue3: Linter.Config = {
  extends: [
    'plugin:vue/vue3-essential' // eslint-plugin-vue
  ]
}
