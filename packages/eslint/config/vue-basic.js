/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2021-01-07 10:12:14
 * @LastEditTime: 2021-08-04 16:16:01
 * @Description: vue 基础配置
 * 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
module.exports = {
  extends: [
    '@vue/typescript/recommended', // @vue/eslint-config-typescript
    '@vue/prettier', // @vue/eslint-config-prettier
    '@vue/prettier/@typescript-eslint' // @vue/eslint-config-prettier, @typescript-eslint/eslint-plugin
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 0
  }
}
