# 什么是 Monorepo?

- [现代前端工程为什么越来越离不开 Monorepo?](https://juejin.cn/post/6944877410827370504)

## 目前比较流行的方案

- [monorepo 方案选择](https://github.com/practicajs/practica/blob/main/docs/docs/decisions/monorepo.md)


## pnpm workspace

- [高性能 npm](https://zhuanlan.zhihu.com/p/457698236)

## 编译系统

***

### 流行的编译工具

集成：rollup（lib）、[webpack](https://tuimao233.gitee.io/mao-blog/ruan-jian-kai-fa/qian-duan-bi-ji/23-webpack-quan-mian-fen-xi.html)（业务）、[vite](https://tuimao233.gitee.io/mao-blog/ruan-jian-kai-fa/qian-duan-bi-ji/41-vite-shi-yong-yu-yuan-li-fen-xi.html#vite-%E6%98%AF%E4%BB%80%E4%B9%88)（业务）

特点：生态、插件完善、摇树、合并打包

单一：tsc（js）、esbuild（go）、swc（rust）、babel（js）

特点：底层、解析、转换

### 两种类型的作用

两种不同类型、相互作用、形成互补

### tsc 的瓶颈

- [deno 1.0 发布说明](https://baijiahao.baidu.com/s?id=1666721939252305091&wfr=spider&for=pc)

- [deno 放弃 Typescript](https://zhuanlan.zhihu.com/p/353487450)

- [tsc 移植到 Go](https://kdy1.dev/posts/2022/1/tsc-go)

### Turborepo 任务编排

***

- [从 Turborepo 看 Monorepo 工具的任务编排能力](https://juejin.cn/post/7065323766640967716)

## 版本系统

***

- [流行的 monorepo 场景发包工具](https://juejin.cn/post/7024827345059971080)


## 文档系统

***

cherry-doc、vitepress、博客园、vuepress、hexo

- Docs 文档收集组合

- Type Declarations 自动生成

- Markdown 引用 Demo 组件

- 历史版本文档系统

## 自动化部署（ci）

***

gitlab ci、github actions、jenkins

