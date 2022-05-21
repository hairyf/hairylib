import { Linter } from 'eslint'
import basic from '@hairy/eslint-basic'
import { merge } from '@hairy/share-node'
import config from './config'

const override: Linter.Config = {
  extends: ['@hairy/eslint-basic'],
  overrides: basic.overrides
}

export = merge(override, config)
