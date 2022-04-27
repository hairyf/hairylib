/**
 * unicorn/prevent-abbreviations 白名单
 * @param name
 */
export const preventAbbreviationsWhites = (names: string[]) => {
  return names.flatMap((v) => [new RegExp(v, 'i'), new RegExp(v + 's', 'i')])
}
