import typescript from '@hairy/eslint-typescript/merge'
import { merge } from '@hairy/share-node'
import config from '../config'

export = merge(typescript, config)
