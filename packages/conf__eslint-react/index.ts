import { Linter } from 'eslint'
import typescript from '@hairy/eslint-typescript'
import { merge } from '@hairy/share-node'
import config from './config'

const override: Linter.Config = {
  extends: ['@hairy/eslint-typescript'],
  overrides: typescript.overrides
}

export = merge(override, config)
