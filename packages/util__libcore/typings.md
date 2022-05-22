---
title : Typescript Types
category: 'utils'
---

# @hairy/utils - type

客户机环境的判断


## Usage

```ts
export type PlainObject = { [key: string]: any }
export type LooseNumber = string | number
export type Key = string | number | symbol

export type DeepReadonly<T> = {
  /* ... */
}
export type DeepRequired<T> = {
  /* ... */
}
export type DeepPartial<T> = {
  /* ... */
}

// 获取对象中的所有 Key
export type DeepKeyof<T> = {
  /* ... */
}
// 替换对象中某一个值
export type DeepReplace<K, V> = {
  /*  */
}
// 多层级配置项
export type Option<L = 'label', V = 'value', C = 'children'> = {
  /* ... */
}

```