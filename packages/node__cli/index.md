---
category: 'Engineering'
---

# @hairy/cli

脚手架，提供创建模板与基库编译。

## Install

`npm install @hairy/cli -g`

## Usage

### Create Template

```sh
Usage: hairy create [options] <app-name>

创建一个由 `内部 templates 其中` 提供支持的新项目


Options:

- TODO
```

Templates
- basic
- vue3 (never)
- uniapp (never)
- react (never)

### Compile Code

```sh
Usage: hairy <dev|build> [options]

不支持 vue 编译，一般用于轻量基础库编译

Modes:
  dev                             提供持续监听编译, 默认输入文件 src 输出文件 dist
  build                           提供编译, 默认输入文件 src 输出文件 dist

Options:
  -i, --input <path>              输入的路径，默认为 src 目录
  -o, --output <path>             输出的路径，默认为 dist 目录
  -t, --type                      输出 d.ts 类型文件，会减慢编译速度
```

### Swagger Code

读取项目根目录的 swagger.config.ts/js/json 生成 `api.ts` ｜ `type.ts` 文件，具体参数参考 [@hairy/swagger#types](https://hairylib.com/swagger/#types)

`npm install @hairy/swagger @hairy/cli`

```ts
import { defineConfig } from '@hairy/swagger'

export default defineConfig({
  // global config
  baseUrl: `'...'`,
  servers: [
    // swagger swervers
    { uri: 'http://...api-docs' }
  ]
})

```

```sh
# install -D/S
npx hairy swagger
# install -g
hairy swagger
```

![cli-case](/public/cli-case.gif)