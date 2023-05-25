# Pnpm Workspace

`pnpm`跟`npm`、`yarn`一样，也内置了对  的支持，使用起来比较简单，在项目根目录中新建`pnpm-workspace.yaml`文件，并声明对应的工作区就好。

~~~yaml
packages:
  # 所有在 packages/ 子目录下的 package
  - 'packages/**'
~~~

### 工作空间协议

默认情况下，如果可用的 packages 与已声明的可用范围相匹配，pnpm 将从工作区链接这些packages。 例如：

如果 bar 中有 `"foo"："^1.0.0"` 的这个依赖项，则 `foo@1.0.0` 链接到 bar 。

但是，如果 bar 的依赖项中有`"foo": "2.0.0"` ，

而`foo@2.0.0` 在工作空间中并不存在，则将从 npm registry 安装`foo@2.0.0` 。

这种行为带来了一些不确定性。

***

幸运的是，`pnpm`从版本 3.7 开始支持工作区协议`workspace:` 。

当使用此协议时，`pnpm` 将拒绝解析除本地工作区 package 之外的任何内容。 

因此，如果您设置为 `"foo": "workspace:2.0.0"` 时，安装将会失败，

因为 `"foo@2.0.0"` 不存在于工作空间中。这个特性在 monorepo 当中特别有用。

## filter 过滤

通过该参数，允许我们将命令运用到指定的包上面，类似于`jQuery`跟`Dom`的选择器，写法如下

~~~sh
pnpm <command> --filter <package_selector>
~~~

同时它也支持链式调用，可以一次写多个调用，如下所示，

~~~sh
pnpm <command> --filter selector1 --filter selector2 -- filter=!selector3
~~~

## publishConfig

在`package`打包之前，可以覆盖 manifest 中的某些字段。 以下字段可以被覆盖：

`bin` |
`main` |
`exports` |
`types 或 typings` |
`module` |
`browser` |
`esnext` |
`es2015` |
`unpkg` |
`umd:main` |
`typesVersions`

例如，下面的`package.json`:

~~~json
{
    "name": "foo",
    "version": "1.0.0",
    "main": "src/index.ts",
    "publishConfig": {
        "main": "lib/index.js",
        "typings": "lib/index.d.ts"
    }
}
~~~

将发布为：

~~~json
{
    "name": "foo",
    "version": "1.0.0",
    "main": "lib/index.js",
    "typings": "lib/index.d.ts"
}
~~~

### publishConfig.directory

使用字段 `publishConfig.directory` 来自定义相对当前 `package.json` 的已发布子目录。

预期会在指定目录中有当前`package`的修改后的版本（**通常使用第三方构建工具**）。

> 在这个例子中 `"dist"` 文件夹必须包含一个 `package.json`

~~~json
{
  "name": "foo",
  "version": "1.0.0",
  "publishConfig": {
    "directory": "dist"
  }
}
~~~