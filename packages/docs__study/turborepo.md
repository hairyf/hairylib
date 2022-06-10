
# Turborepo

> 本文来自于[从 Turborepo 看 Monorepo 工具的任务编排能力](https://zhuanlan.zhihu.com/p/468382756)

Turborepo 是一个用于 JavaScript 和 TypeScript 代码库的高性能构建系统。通过增量构建、智能远程缓存和优化的任务调度，Turborepo 可以将构建速度提高 85% 或更多，使各种规模的团队都能够维护一个快速有效的构建系统，该系统可以随着代码库和团队的成长而扩展。

## 一个合格 Monorepo 的自我修养

随着业务的发展和团队的变化，业务型 Monorepo 中的项目会逐渐增加，极端一点的例子就是 Google 将整个公司的代码都放到一个仓库中，仓库的大小达到了 80TB。

> 业务型 Monorepo：不同于 lib 型 Monorepo（React、Vue3、Next.js 以及 Babel 等广义上的 packages）,业务型 Monorepo 将多个业务应用 App 及其依赖的公用组件库或工具库组织到了一个仓库中。 ——《Eden Monorepo 系列：浅析 Eden Monorepo 工程化建设》

项目数量的增加意味着在享受 Monorepo 优势的同时，也带来了巨大的挑战，优秀的 Monorepo 工具可以让开发者毫无负担的享受 Monorepo 的优势，而不好用的 Monorepo 工具可以让开发者痛不欲生，甚至让人怀疑 Monorepo 存在的意义。

实际运用场景：

1. 依赖版本冲突
   - 新建一个项目，该项目由于依赖问题无法启动
   - 新建一个项目，其他项目由于依赖问题无法启动
2. 依赖安装速度慢
   - 初始化安装依赖 `20min+`
   - 新增一个依赖 `3min+`
3. build/test/lint 等任务执行慢

***

Monorepo 在实践过程中，发现除了最基本的代码共享能力外，还应当至少具备三种能力

- 依赖管理能力。随着依赖数量的增加，依旧能够保持依赖结构的正确性、稳定性以及安装效率。
- 任务编排能力。能够以最大的效率以及正确的顺序执行 Monorepo 内项目的任务（可以狭义理解为 `npm scripts`，如 `build`、`test` 以及 `lint` 等），且复杂度不会随着 Monorepo 内项目增多而增加。
- 版本发布能力。能够基于改动的项目，结合项目依赖关系，正确地进行版本号变更、CHANGELOG 生成以及项目发布。

一些流行工具的支持能力如下表所示：

## 范围界定：按需执行子集任务

![](https://pic1.zhimg.com/80/v2-050b58de8f38462cc7bff97c2805c734_1440w.jpg)

该能力在日常开发中具有丰富的使用场景。

例如第一次拉取仓库，启动项目 app1 需要构建 Monorepo 内 app1 的前置依赖 `package1` 以及 `package2`。

或在打包项目 app1 时，需要构建 app1 自身以及 Monorepo 内 app1 的前置依赖 `package1` 以及 `package2`。

此时则应该根据需要筛选出需要构建的项目，而不应该引入与当前意图无关的项目构建。

在不同的 Monorepo 工具中，这一行为有着不同的称呼：

Rush 中称之为 [Selecting subsets of projects](https://rushjs.io/pages/developer/selecting_subsets/)，选择项目子集，在本示例中应当使用如下命令：

~~~sh
# 本地启动 app1 开发模式，app1 为依赖图的顶端，但不需要构建 app1 自身
$ rush build --to-except @monorepo/app1

# SCM 打包 app1，app1 为依赖图的顶端，且需要构建 @monorepo/app1 自身
$ rush build --to @monorepo/app1
~~~

Pnpm / Turbo 中称之为 [Filtering](https://pnpm.io/filtering)，即过滤，将命令限制于包的特定子集，在本示例中应当使用如下命令：

~~~sh
# 本地启动 app1 开发模式，app1 为依赖图的顶端，但不需要构建 app1 自身
$ pnpm build --filter @monorepo/app1^...

# SCM 打包 app1，app1 为依赖图的顶端，且需要构建 @monorepo/app1 自身
$ pnpm build --filter @monorepo/app1...
~~~

范围界定保证了执行任务的数量不会随着 Monorepo 内无关项目的增加而增加，丰富的参数能够帮助我们在各种场景（package 发包、app 构建以及 CI 任务）去进行 `selecting/filtering/scoping`。

## 并行执行：充分释放机器性能

![](https://pic3.zhimg.com/80/v2-1f22dc82ce84dfcc43378410011f714a_1440w.jpg)

假设挑选出了 20 个子集任务，应该如何执行这 20 个任务来保证正确性以及效率呢？

Project 之间存在依赖关系，那么任务之间也存在依赖关系，以 build 任务为例，只有前置依赖构建完毕，才可构建当前项目。

## 打破任务边界

![](https://pic4.zhimg.com/80/v2-6521e77b01011a03d8ec848ae48da7d3_1440w.jpg)

之前谈到任务执行时，都是在同一种任务下，比如 `build`、`lint` 或是 `test`，在并行执行 `build` 任务时，不会去考虑 lint 或是 test 任务。如上图 Lerna 区域所示，依次执行四种任务，每一种任务都被前一种任务阻塞住了，即使内部是并行执行的，但不同任务之间依旧存在了资源浪费。

Lage/Turborepo 为开发者提供了一套明确任务关系的方法（见 turbo.json），基于该关系，

Lage/Turborepo 可以去进行不同种类任务间的调度和优化。

相较于一次只能执行一种任务，重叠瀑布式的任务执行效率当然要高得多。

### turbo.json

~~~json
{
  "$schema": "https://turborepo.org/schema.json",
  "pipeline": {
    "build": {
      // 其依赖项构建命令完成后，进行构建
      "dependsOn": ["^build"]
    },
    "test": {
      // 自身的构建命令完成后，进行测试（故上图存在错误）
      "dependsOn": ["build"]
    },
    "deploy": {
      // 自身 lint 构建测试命令完成后，进行部署
      "dependsOn": ["build", "test", "lint"]
    },
    // 随时可以开始 lint
    "lint": {}
  }
}
~~~

### 正确编排顺序

![](https://pic4.zhimg.com/80/v2-43c579ac359508f093641d3d5f1e5e57_1440w.jpg)

## 云端缓存：跨多环境复用缓存

![](https://pic3.zhimg.com/80/v2-67bd2047c6447e0084823229f8035bf6_1440w.jpg)

Rush / Turbo 具备增量构建的特性，使 rush build 能够跳过自上次构建以来输入文件（input files）没有变化的项目，配合第三方存储服务，可以达到跨多环境复用缓存的效果。

支持了第三方远端缓存能力（在此之前仅支持 azure 与 amazon），将赋予了开发者实现基于企业内部服务的构建缓存方案的能力。

落地到日常开发场景中，本地开发、CI 以及各开发环节都能从中受益。

![](https://pic2.zhimg.com/80/v2-cd5461f9e5a8e0e7624200ae349f5b65_1440w.jpg)

> 基于 git diff 挑选出源文件改动的 projects，此处为 package0

经过范围界定，package0 及其上游 app1 会被纳入构建流程，由于 app1 需要构建，作为其前置依赖，package1 至 package5 也需要被构建，

但这 5 个 package 实际上与 package0 并不存在依赖关系，

也不存在变更，仅为了完成 app1 的构建准备工作。

![](https://pic4.zhimg.com/80/v2-4f493c56c2e642ff2b7de838196a2e37_1440w.jpg)

由于 package1-package5 等 5 个项目与 package0 不存在直接或间接的依赖关系，且输入文件没有改变，故能够命中缓存（如有），跳过构建行为。

如此便将构建范围由 7 个 project 降至 2 个 project。

## 如何判断是否命中缓存?

![](https://pic3.zhimg.com/80/v2-917525fa87ebc227e46c6b53c58d236e_1440w.jpg)

在云端，每一个项目构建结果的缓存压缩包与其输入文件 input files 计算出来的 cacheId 形成映射，输入文件未发生变化，则计算出来的 cacheId 值就不会变化（内容哈希），就能命中对应的云端缓存。

输入文件包含以下内容：

- 项目代码源文件
- 项目 NPM 依赖
- 项目依赖的其他 Monorepo 内部项目的 cacheId
