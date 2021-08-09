import { Linter } from 'eslint'
export const typescript: Linter.Config = {
  extends: ['plugin:@typescript-eslint/recommended'],
  rules: {
    // 限制相关语法
    // 'no-restricted-syntax': [
    //   'error',
    //   {
    //     selector:
    //       'AssignmentPattern[left.typeAnnotation.type != TSTypeAnnotation] > ObjectExpression[properties.length = 0].right',
    //     message: '参数默认值不能为空对象, 这将会有类型丢失的风险'
    //   }
    // ],
    // 允许不驼峰命名
    '@typescript-eslint/camelcase': 0,
    // 允许空方法的产生(兼容构建工具)
    '@typescript-eslint/no-empty-function': [0],
    // 是否禁止使用 any
    '@typescript-eslint/no-explicit-any': 0,
    // 允许函数不存在返回值
    '@typescript-eslint/explicit-module-boundary-types': 0,
    // 首选使用简洁的可选链表达式，而不是链式逻辑与
    // '@typescript-eslint/prefer-optional-chain': 2,
    // 阻止使用 ! 运算符
    '@typescript-eslint/no-non-null-assertion': 0,
    // 允许使用 @ts-ignore
    '@typescript-eslint/ban-ts-comment': 0,
    // 允许使用 ojbect 类型
    '@typescript-eslint/ban-types': 0
  }
}
