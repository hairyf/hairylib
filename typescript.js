/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2021-01-07 10:12:14
 * @LastEditTime: 2021-03-04 09:44:16
 * @Description: 
 * 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
const defaultRules = require('./rules/default');
const typescriptRules = require('./rules/typescript');
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    ...defaultRules,
    ...typescriptRules,
  },
};
