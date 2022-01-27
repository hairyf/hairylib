---
title: file
category: 'Browser'
---

# file

关于浏览器中文件操作

## Install

`npm install @hairy/browser -g`

## Usage

### chooseFile

以 API 的形式选择多个或单个文件

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

### chooseImage

以 API 的形式选择多个或单个图片

```ts
import { chooseImage } from '@hairy/browser'

chooseImage({
  multiple: true
})
  .then(files => {
    console.log(files) // File[]
  })
```

### downloadBlobFile

生成 blob|string 文件，并下载

```ts
import { downloadBlobFile } from '@hairy/browser'

downloadBlobFile('{ name: 123 }', 'user.json')
```

### downloadNetworkFile

下载网络文件

```ts
import { downloadNetworkFile } from '@hairy/browser'

downloadNetworkFile('http://...png', 'w.png')
```

### readFileReader

读取 File 文件

```ts
import { readFileReader } from '@hairy/browser'

readFileReader('readAsBinaryString', file)
  .then(str => {
    console.log('file content: ', str)
  })
```