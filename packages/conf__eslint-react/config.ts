import { Linter } from 'eslint'

const config: Linter.Config = {
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

export = config
