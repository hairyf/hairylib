/*
 * @Author: Mr.Mao
 * @Date: 2021-01-07 10:12:14
 * @LastEditTime: 2021-07-25 10:43:28
 * @Description: typescript 基础配置
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
module.exports = {
  rules: {
    // 限制相关语法
    'no-restricted-syntax': [
      'error',
      {
        selector:
          'AssignmentPattern[left.typeAnnotation.type != TSTypeAnnotation] > ObjectExpression[properties.length = 0].right',
        message: '参数默认值不能为空对象, 这将会有类型丢失的风险'
      }
    ],
    // 允许不驼峰命名
    '@typescript-eslint/camelcase': 0,
    // 允许空方法的产生(兼容构建工具)
    '@typescript-eslint/no-empty-function': [0],
    // 是否禁止使用 any
    '@typescript-eslint/no-explicit-any': 0,
    // 允许函数不存在返回值
    '@typescript-eslint/explicit-module-boundary-types': 0,
    // 首选使用简洁的可选链表达式，而不是链式逻辑与
    '@typescript-eslint/prefer-optional-chain': 2,
    // 阻止使用 ! 运算符
    '@typescript-eslint/no-non-null-assertion': 0
  }
}
