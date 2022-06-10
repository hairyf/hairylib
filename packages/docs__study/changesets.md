
# Changesets: 流行的 monorepo 场景发包工具

Changesets 是一个用于 Monorepo 项目下版本以及 Changelog 文件管理的工具。目前一些比较火的 Monorepo 仓库都在使用该工具进行项目的发包例如 pnpm、mobx 等。在 github 上有大约 2k 的 star。

## Changesets 工作流

changesets 主要关心 monorepo 项目下子项目版本的更新、changelog 文件生成、包的发布。一个 changeset 是个包含了在某个分支或者 commit 上改动信息的 md 文件，它会包含这样一些信息:

- 需要发布的包
- 包版本的更新层级(遵循 semver 规范)
- CHANGELOG 信息

在 changesets 工作流会将开发者分为两类人，一类是项目的维护者，还有一类为项目的开发者，两者的职责可以通过如下流程图很简洁的表示出来:

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8116f4734e81472c9b2cf91012e838bb~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

根据上图， changesets 的工作流程是这样：

开发者在 Monorepo 项目下进行开发，开发完成后，给对应的子项目添加一个 changesets 文件。

项目的维护者后面会通过 changesets 来消耗掉这些文件并自动修改掉对应包的版本以及生成 CHANGELOG 文件，

最后将对应的包发布出去。

## version

本质上做的工作是消耗 changeset 文件并且修改对应包版本以及依赖该包的包版本，同时会根据之前 changeset 文件里面的信息来生成对应的 CHANGELOG 信息。version 的源码流程具体为:

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/56f5a31a86704bb390c65a795c1145df~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)


## changesets 目前缺陷

> 命令均不支持项目筛选

例如 npx changeset 命令无法指定特定的包，而只能通过前面 getPackages() 方法得到所有的子项目名来进行选择，如果一个项目下存在好几十个子项目的话，找具体的项目就是一件很费成本的事情。

> Prelease 包发布过程繁琐

使用 changesets 如果想发一些测试版本的包，需要反复执行 changeset pre enter 、changeset pre exit 以及 changeset version 等命令，整个流程上是很繁琐的。
实际上在自行维护的过程中，这些琐碎的流程可以集合到一个命令中来完成的，并不用消费如此大的成本。

## 总结

目前的 changesets 方案整体而言在 Monorepo 项目下还是挺适用的，而且整体架构上而言并没有特别大的技术难点，主要难点在于 version bump 这一部分。

该方案最大的优点在于提供了很大的自主权在用户手中，在复杂的业务场景下能够做出一些合适的调整，例如用户可以自行修改 changeset 文件、changelog 文件、甚至是 bump version 后不满意的版本。

相比较于 lerna 提供的比较理想化的方案而言，changeset 本身是一套泛用性很强的方案，而且比较适合当下 Monorepo 工作流场景下的一些运作方式，虽然本身还存在着一些的缺点。