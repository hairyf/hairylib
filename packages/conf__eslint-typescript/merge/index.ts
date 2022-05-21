import { Linter } from 'eslint'
import basic from '@hairy/eslint-basic'
import { merge } from '@hairy/share-node'
import config from '../config'

const typescript: Linter.Config = merge(basic, config)

export = typescript
