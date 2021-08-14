## 关于(About)

hello 这里是腿毛，@tuimao/config 代表我的配置，是使用 lerna 管理的多个工具模块包的项目。

目前已有模块包：

- [@tuimao/eslint](./packages/_eslint#readme)
- [@tuimao/tailwind](./packages/_tailwind#readme)
- [@tuimao/axios](./packages/axios#readme)
- [@tuimao/browser](./packages/browser#readme)
- [@tuimao/core](./packages/core#readme)
- [@tuimao/utils](./packages/utils#readme)
- [@tuimao/uni-use](./packages/uni-use#readme)
- [@tuimao/uni-utils](./packages/uni-utils#readme)
- [@tuimao/vue-directive](./packages/vue-directive#readme)
- [@tuimao/vue-use](./packages/vue-use#readme)
- [@tuimao/vue-utils](./packages/vue-utils#readme)

## 项目逻辑图

![steps](./meta/images/tuimao-scope-steps.png)

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

