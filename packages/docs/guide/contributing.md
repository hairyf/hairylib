---
category: 'Guide'
---
# Contributing

一般情况下你可能不需要这个项目做出贡献（但，如果你需要的话，这里有一些指导方针。

## Development

将此 repo 克隆到您的本地计算机并安装依赖项。

```sh
pnpm install
```

项目使用 Vitepress 进行快速开发和记录。您可以通过以下方式在本地启动它

```sh
pnpm dev
```

## Existing functions

随意增强现有功能。请尽量不要引入重大更改。


## Monorepo

项目对多个包使用 monorepo

```
packages
  utils/          - 核心包
  [...addons]/    - add-ons named
```

`index.md` 简短的介绍要写在第一句话放在包文档中，经可能的保持简洁明了。