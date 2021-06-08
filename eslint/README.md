# eslint-config-craftsman

前端eslint代码规则，默认为javascript配置，共有4个配置。
javasciprt(默认)，typescript，uni-javascript，uni-typescript。

## 使用规则

安装：`npm i eslint-config-craftsman -D`

### typescript 中使用
~~~js
{
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
    "eslint-config-craftsman/typescript"
  ]
}
~~~
### javascript 中使用
~~~js
{
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/prettier",
    "eslint-config-craftsman"
  ]
}
~~~
### uni-typescript 中使用
~~~js
{
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
    "eslint-config-craftsman/uni-typescript"
  ]
}
~~~
### uni-javascript 中使用
~~~js
{
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/prettier",
    "eslint-config-craftsman/uni-javascript"
  ]
}
~~~