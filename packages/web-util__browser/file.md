---
title: File Tools
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
}).then((files) => {
  // files: File[]
})
```

### chooseImage

以 API 的形式选择多个或单个图片

```ts
import { chooseImage } from '@hairy/browser'

chooseImage({
  multiple: true
}).then((files) => {
  // files: File[]
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

readFileReader('readAsBinaryString', file).then((str) => {
  // file content: str
})
```

## Type Declarations

~~~typescript

interface ChooseFileOptions {
  /**
   * 是否多选文件
   */
  multiple?: boolean;
  /**
   * 选择文件的默认格式
   */
  accept?: string;
}
declare const chooseFile: (option?: ChooseFileOptions) => Promise<File[]>;
/** @deprecated use chooseFile */
declare const selectFiles: (option?: ChooseFileOptions) => Promise<File[]>;
interface ChooseImageOptions {
    /**
     * 是否多选图片
     */
    multiple?: boolean;
}
/**
 * 选择多个图片
 * @param multiple 是否多选
 */
declare const chooseImage: (options?: ChooseImageOptions) => Promise<File[]>;
/** @deprecated use chooseFile */
declare const selectImages: (options?: ChooseImageOptions) => Promise<File[]>;
/**
 * 生成 blob|string 文件，并下载
 * @param data blob 数据，或者字符串
 * @param name 文件名称
 */
declare const downloadBlobFile: (data: Blob | string, name: string) => void;
/**
 * 下载网络文件
 * @param url 下载地址
 * @param fileName 文件名称
 */
declare const downloadNetworkFile: (url: string, fileName?: string | undefined) => void;
declare type ReaderType = 'readAsArrayBuffer' | 'readAsBinaryString' | 'readAsDataURL' | 'readAsText';
/**
 * 读取 File 文件
 * @param formType 转换形式
 * @param file 文件
 */
declare const readFileReader: <T extends ReaderType>(formType: T, file: File) => Promise<T extends "readAsArrayBuffer" ? ArrayBuffer : string>;

~~~