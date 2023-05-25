# Monorepo 项目编译

在前端开发当中，我们会用很多编译工具：`typescript compiler`、`babel`、`eslint`、`postcss` 

Monorepo 中，我们还需要思考应该需要哪些**编译的工具**，以及如何从全局的方向到，

一个子包的打包/编译是如何运作的，做到一套 Monorepo 只对应一套编译系统。

### 集成打包工具

[rollup（框架/库）](https://tuimao233.gitee.io/mao-blog/ruan-jian-kai-fa/qian-duan-bi-ji/45-rollup-javascript-mo-kuai-da-bao-qi.html)、
[webpack（应用程序）](https://tuimao233.gitee.io/mao-blog/ruan-jian-kai-fa/qian-duan-bi-ji/23-webpack-quan-mian-fen-xi.html)、
[vite（应用程序）](https://tuimao233.gitee.io/mao-blog/ruan-jian-kai-fa/qian-duan-bi-ji/41-vite-shi-yong-yu-yuan-li-fen-xi.html#vite-%E6%98%AF%E4%BB%80%E4%B9%88)

特点：生态、插件完善、摇树、合并打包

### Rollup 开发框架 / 库的优势

- 配置的简易性、设计良好的插件系统
- 输出结果更加扁平，执行效率更高
- 自动移除未引用的代码
- 打包结果依然完全可读

### Rollup 开发应用程序的缺点

- 加载非ESM的第三方模块比较复杂
- 模块最终都会被打包到一个函数中，无法实现HMR
- 浏览器环境中，代码拆分功能依赖AMD库

## 基础编译工具

[tsc（js）](https://www.typescriptlang.org/)、
[esbuild（go）](https://esbuild.github.io/)、
[swc（rust）](https://swc.rs/)、
[babel（js）](https://www.babeljs.cn/)

特点：底层、解析、转换

- **ESBuild** 是基于 Go 语言开发的 JavaScript Bundler, 由 Figma 前 CTO `Evan Wallace` 开发, 并且也被 `Vite` 用于开发环境的依赖解析和 `Transform`.

- **SWC** 则是基于 Rust 的 JavaScript Compiler(其生态中也包含打包工具), 目前为 `Next.JS/Parcel/Deno` 等前端圈知名项目使用.

***

这两个构建工具有什么特点，为什么要关注他们？因为...

![](https://pic3.zhimg.com/80/v2-ce79dc3bcba1a24516214fc42066cc82_1440w.jpg)

- 项目的构建时间随着项目体积和复杂度逐渐递增, 有的时候本地编辑一个项目要等上个大几分钟(此处@Webpack)

![](https://pic4.zhimg.com/80/v2-9a173816c43709c3bcb88e950f54306b_1440w.jpg)

- 这个是 ESBuild 官网对于其打包10份 `three.js` 的速度对比

![](https://pic1.zhimg.com/80/v2-570a0a2e25af7e412db9ce5dc15c53b0_1440w.jpg)

- SWC 则宣称其比 Babel 快20倍(四核情况下可以快70倍)

![](https://pic3.zhimg.com/80/v2-4a049b1b7bfa6cff5e0b69c66f13983a_1440w.png)

## 两种类型的作用

集成打包工具是可以和其他编译工具配合使用的，特别是在 rollup 中，

能很方便的利用 esbuild 和 swc 的底层编译从而提升编译速度

## TSC 瓶颈 (TSC Bottleneck)

### Deno 1.0 正式发布说明中提到

> 在内部，Deno 使用 Microsoft 的 TypeScript 编译器检查类型并生成 JavaScript。 与 V8 解析 JavaScript 所花费的时间相比，它非常慢。 在项目的早期，我们曾希望“ V8快照”在此能够带来重大改进。 快照肯定有帮助，但是它仍然缓慢。 我们当然认为可以在现有 TypeScript 编译器的基础上进行一些改进，但是对我们来说很显然，最终需要在 Rust 中实现类型检查。 这将是一项艰巨的任务，不会很快发生。 但它可以在开发人员经历的关键路径上提供数量级的性能改进。 TSC必须移植到Rust。 如果您有兴趣合作解决此问题，请与我们联系。

### Deno 内部部分模块停用 TypeScript

- 当更改文件时，TypeScript 的编译需要几分钟，这使得项目文件的连续编译非常缓慢。
- 在创建实际的 Deno 可执行文件和面向用户的 API 文件时，使用的 TypeScript 结构会造成项目运行的性能问题。
事实证明，TypeScript 本身对 Deno 代码管理没有帮助，并且 Deno 团队正经受着相反的效果。在项目的议题列表中就提到一个问题：在两个不同的位置产生了相同的独立主体类。
- 必须手动保持内部代码和运行时 TypeScript 声明的同步，因为 TypeScript 编译器对生成 d.ts 文件没有帮助。
- Deno 团队需要去维护两台 TS 编译器主机：一个用于内部代码，另一个用于外部用户代码，尽管两者的目标相似。

### swc 团队正在通过移植 tsc 到 Go

> 随着 TypeScript 的采用率不断提高，大型项目正面临两难境地：类型检查是其工作流程中最慢的部分之一。开发人员希望类型安全而不需要以较慢的迭代周期为代价。

> TypeScript 编译器，或者tsc，检查你的类型的有效性并将你的代码编译成 JavaScript。您拥有的代码越多，编译所需的时间就越长。在大中型 TypeScript 项目中，这种编译速度非常慢。虽然开发人员可以用 SWC 替换其工作流程的转译部分，但类型检查仍然是一个瓶颈。

https://kdy1.dev/posts/2022/1/tsc-go