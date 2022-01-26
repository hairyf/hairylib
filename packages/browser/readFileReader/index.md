---
title: downloadNetworkFile
category: 'Browser'
---

# downloadNetworkFile

读取 File 文件

## Usage

```ts
import { readFileReader } from '@hairy/browser'

readFileReader('readAsBinaryString', file)
  .then(str => {
    console.log('file content: ', str)
  })
 
```