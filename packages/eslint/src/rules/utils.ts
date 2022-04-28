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
  // eslint-disable-next-line unicorn/import-index
  const unicorn = (require('.') || require('./index.js')).unicorn
  const defaultOptions = unicorn['unicorn/prevent-abbreviations'][1]
  const options = { ignore: [...preventAbbreviationsWhites(names), ...defaultOptions.ignore] }
  return {
    'unicorn/prevent-abbreviations': [unicorn['unicorn/prevent-abbreviations'][0], options]
  }
}
