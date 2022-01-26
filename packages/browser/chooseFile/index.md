---
title: chooseFile
category: 'Browser'
---

# chooseFile

以 API 的形式选择多个或单个文件

## Usage

```ts
import { chooseFile } from '@hairy/browser'

chooseFile({
  accept: 'image/jpeg,image/x-png,image/gif',
  multiple: true
})
  .then(files => {
    console.log(files) // File[]
  })
```