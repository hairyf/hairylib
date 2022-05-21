import { Linter } from 'eslint'
import typescript from '@hairy/eslint-typescript'
import { merge } from '@hairy/share-node'

const tsReact: Linter.Config = merge(typescript, {
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
})

export default tsReact
