---
title: chooseImage
category: 'Browser'
---

# chooseImage

以 API 的形式选择多个或单个图片

## Usage

```ts
import { chooseImage } from '@hairy/browser'

chooseImage({
  multiple: true
})
  .then(files => {
    console.log(files) // File[]
  })
```