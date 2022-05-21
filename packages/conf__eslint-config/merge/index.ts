import { merge } from '@hairy/share-node'
import tsReact from '@hairy/eslint-react/merge'
import tsVue3 from '@hairy/eslint-vue/merge'

const config = merge(tsReact, tsVue3)

export = config
