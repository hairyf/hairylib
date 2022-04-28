import { mergeWith } from 'lodash'
import { unicorn } from '.'
import { mergeCustomizer } from '../utils'

/**
 * unicorn/prevent-abbreviations 白名单
 * @param name
 */
export const preventAbbreviationsWhites = (names: string[]) => {
  return names.flatMap((v) => [new RegExp(v, 'i'), new RegExp(v + 's', 'i')])
}

/**
 * 继承 @hairy/eslint unicorn/prevent-abbreviations 并覆盖
 * @param names
 */
export const extendsPreventAbbreviations = (names: string[]) => {
  const options = { ignore: preventAbbreviationsWhites(names) }
  return {
    'unicorn/prevent-abbreviations': [
      unicorn['unicorn/prevent-abbreviations'][0],
      mergeWith(options, unicorn['unicorn/prevent-abbreviations'][1], mergeCustomizer)
    ]
  }
}
