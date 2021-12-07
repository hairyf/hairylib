# @hairy/cli

脚手架，提供创建模板与基库编译。

## Install

`npm install @hairy/cli -g`

## Usage

### 创建项目

使用 hairy create 创建模板，目前可选择以下模板

`basic`（基本模板，包含 eslint、prettier、lodash）
`vue3`（TODO）
`uniapp`（TODO）
`react`（TODO）

~~~sh
hairy create <project-path>
~~~

### 编译项目（esbuild）

使用 dev | build 指令编译基库项目

~~~sh
hairy dev <path>
hairy build <path>
~~~