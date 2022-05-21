import { merge } from '@hairy/share-node'
import tsReact from '../conf__eslint-react'
import tsVue3 from '../conf__eslint-vue'

const config = merge(tsReact, tsVue3)

export = config
