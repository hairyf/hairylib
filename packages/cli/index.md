---
title: cli
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
Usage: hairy <mode> [options]

仅支持 typescript ，不支持 vue、react 编译，一般用于轻量基础库编译

Modes:
  dev                             提供持续监听编译, 默认输入文件 src 输出文件 dist
  build                           提供编译, 默认输入文件 src 输出文件 dist

Options:
  -i, --input <path>              输入的路径，默认为 src 目录
  -o, --output <path>             输出的路径，默认为 dist 目录
  -n, --not-type                  阻止输出 types，可用于提高编译速度
```