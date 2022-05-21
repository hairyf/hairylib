import { Linter } from 'eslint'

const config: Linter.Config = {
  extends: ['@hairy/eslint-vue', '@hairy/eslint-react']
}

export = config
