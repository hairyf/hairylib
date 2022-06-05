---
category: 'Node Utils'
---

# Share Node Utils

一些实用的 Node 工具。

## Usage Functions

### loadConfigFromFile

加载 config file，支持 cjs / esm / ts-esm / json

xxx-config.ts > export default  { a: 1 }

```ts
// 可以不输入后缀，自动读取内容
const { config = {} } = loadConfigFromFile('.xxx-config')
config.a // 1
```