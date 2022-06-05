---
side-bar: "Hairy Cli"
category: 'Node Utils'
---

# Hairy Command-Line Interface

提供创建模板，编译代码，生成 OpenAPI-v2（swagger） 接口功能等。

## Install

`npm install @hairy/cli -g`

## Usage Commands

### Create Template

```sh
Usage: hairy create [options] <app-name>

创建一个由 `内部 templates 其中` 提供支持的新项目

Templates
- basic
- hairy
- vue3 (never)
- uniapp (never)
- react (never)
```

### Compile Code

```sh
Usage: hairy <dev|build> [options]

暂不支持 vue 编译，一般用于轻量基础库编译

Modes:
  dev                             监听编译, 默认输入文件 src 输出文件 dist
  build                           提供编译, 默认输入文件 src 输出文件 dist

Options:
  -i,--input <dir/file>   输入的路径，默认为 src 目录
  -o,--output <dir/file>  输出的路径，默认为 dist 目录
  -t,--type               输出 d.ts 类型文件，会减慢编译速度
  -l,--logger             是否打印日志，默认不打印
  -m,--meta               是否输出元数据 (package.json, README.md, ...)
  -ig,--ignore [source]   忽略某些文件 / 文件夹防止进行编译, 仅在编译文件夹时起效
  -e,--esllpkg            输出多模块包模式 .cjs/.esm/.iife/.iife.min
  -g,--globalName <name>  在 IIFE 中 globalName 的定义
  -pm,--pmode [mode]      输出多模块包的指定部分，default = esm/cjs/iife/iife-minify
```

### ApiGenerator Code

读取项目根目录的 api-generator.config.ts/js/json 生成请求和类型文件，默认使用 axios-ts 编译器，具体参数参考 [@hairy/api-generator#types](https://hairylib.com/swagger/#types)，目前支持的解析器有 OpenAPI-v2（swagger）
`npm install @hairy/api-generator @hairy/cli`

```ts
import { defineConfig } from '@hairy/api-generator'

export default defineConfig({
  // global config
  baseUrl: `'...'`,
  servers: [
    // open-api swervers
    { uri: 'http://...api-docs' }
  ]
})

```

```sh
# install -D/S
npx hairy api-generator
# install -g
hairy api-generator
```

![cli-case](/cli-case.gif)