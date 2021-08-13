import { concat, merge } from 'lodash'
import { basic } from './configs/basic'
import { typescript } from './configs/typescript'

export = merge(basic, typescript, {
  extends: concat(basic.extends, typescript.extends).reverse()
})
