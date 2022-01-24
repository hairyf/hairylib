# @hairy/utils

Vue 开发所使用到的工具函数

## Install

`yarn add @hairy/vue-utils`

## Usage Router api

- calculRouterActive:     递归处理路由高亮信息
- outputRoutes:           递归输出当前路由权限表
- compareRoutes:          递归对比路由权限表, 返回新的路由列表
- setDefaultRoutes:       递归处理所以页面默认的重定向
- setDefaultHomeRoute:    设置当前路由表默认路由路径 / => 第一路径

## Usage Utils api

- renderInstance:   渲染组件实例

## Usage Vuex api

- createModule:     创建包含动态类型的 vuex 模块