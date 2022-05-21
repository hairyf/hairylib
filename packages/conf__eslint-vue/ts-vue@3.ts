import typescript from '@hairy/eslint-typescript'
import { merge } from '@hairy/share-node'
import { Linter } from 'eslint'
import { vue3 } from './config'

const override: Linter.Config = {
  extends: ['@hairy/eslint-typescript'],
  overrides: typescript.overrides
}

export = merge(override, vue3)
