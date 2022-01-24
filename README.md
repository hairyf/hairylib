## 关于(About)

hairylib 是工具代码库，使用 lerna 管理的多个工具模块包的项目。

目前已有模块包：

- [@hairy/eslint](./packages/_eslint#readme)
- [@hairy/tailwind](./packages/_tailwind#readme)
- [@hairy/axios](./packages/axios#readme)
- [@hairy/browser](./packages/browser#readme)
- [@hairy/utils](./packages/utils#readme)
- [@hairy/uni-use](./packages/uni-use#readme)
- [@hairy/uni-utils](./packages/uni-utils#readme)
- [@hairy/vue-directive](./packages/vue-directive#readme)
- [@hairy/vue-use](./packages/vue-use#readme)
- [@hairy/vue-utils](./packages/vue-utils#readme)


## 项目流程图

![steps](./meta/images/steps.png)

## 文档系统

> TODO

## 有点意思的小技巧

### 在 .js 文件中引入 .ts 文件

安装扩展：`esbuild-register`

~~~js
require('esbuild-register')
// 这样要注意的是，因为 ts 使用 esm 的原因，export default 则需要在获取一层
module.exports = require('./scripts/rollup.config.ts').default
~~~

## 项目中依赖

- fast-glob：使用通配符来选择文件：例如 `fg('./packages/**/*.js')`
- fs-extra：node fs 的加强版，还扩展了一些api
- consola：一个标识功能的输出台
- rollup：用来打包的一个东西
- esbuild：编译 .ts 很快的工具
- lerna：管理多模块项目的工具
- jest：有了这个就不用怕代码有 bug 了ヽ(✿ﾟ▽ﾟ)ノ
- esno：提供直接运行 .ts 文件的工具
- eslint：代码乱了会自动修复的一个规范工具
- rimraf：删除东西真的很快

