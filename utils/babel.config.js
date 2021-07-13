/*
 * @Author: Mr.Mao
 * @Date: 2021-07-09 14:33:29
 * @LastEditTime: 2021-07-13 14:11:27
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
// the file is used for jest testing & site building
// > 2%, make template string not compiled to concat, since it's not fast

const jestBabelPresets = [
  ['@babel/preset-env', { targets: { node: 'current' } }],
  [
    '@babel/preset-typescript',
    {
      allExtensions: true,
      isTSX: true,
      jsxPragma: 'h',
      jsxPragmaFrag: 'Fragment'
    }
  ]
]

const buildBabelPresets = [
  [
    '@babel/preset-env',
    {
      targets: '>2%, not IE 11'
    }
  ]
]
module.exports = {
  presets: process.env.NODE_ENV === 'test' ? jestBabelPresets : buildBabelPresets
}
