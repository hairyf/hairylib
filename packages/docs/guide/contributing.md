---
category: 'Guide'
---
# Contributing

感谢您有兴趣为这个项目做出贡献！

## Development

将此 repo 克隆到您的本地计算机并安装依赖项。

```sh
pnpm install
```

项目使用 Vitepress 进行快速开发和记录。您可以通过以下方式在本地启动它

```sh
pnpm dev
```

## Contributing

### Existing functions

随意增强现有功能。请尽量不要引入重大更改。

### New functions

添加新功能有一些注意事项

- 在开始工作之前，最好先打开一个问题进行讨论。
- 实现应packages/core作为文件夹放在下面并公开 index.ts

> 请注意，您不需要更新indexes.json 包' index.ts。它们是自动生成的。


## New add-ons

非常欢迎新的附加功能！

- 在 下创建一个新文件夹packages/，将其命名为您的加载项名称。
- `README.md` 在该文件夹下创建。
- 像对 util__libcore 包所做的那样添加功能。
- 提交并作为 PR 提交。


## Project Structure

### Monorepo

项目对多个包使用 monorepo

```
packages
  shared/         - 跨包共享实用程序
  utils/          - 核心包
  [...addons]/    - add-ons named
```

## Function Folder

函数文件夹典型性包含以下 3 个文件：

> 您可以在下面找到模板 packages/vue__use/_template/

`index.ts` 您应该使用名称导出函数。

```typescript
// DO
export { useMyFunction }

// DON'T
export default useMyFunction
```

`index.md` 简短的介绍要写在第一句话放在功能文档中，经可能的保持简洁明了。