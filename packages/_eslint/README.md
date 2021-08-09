# @tuimao/eslint

eslint 的规则集，包含了 vue | ts | uni 的规则。

## install

`npm install eslint @tuimao/eslint -D`

## use

创建 eslint 规则文件，.eslintrc.js | .eslintrc

~~~js
module.exports = {
  "extends": []
}
~~~

### ts-uni-vue@2
~~~json
"extends": [ "@tuimao/eslint/ts-uni-vue@2" ]
~~~
### ts-vue@2
~~~json
"extends": [ "@tuimao/eslint/ts-vue@2" ]
~~~
### ts-vue@3
~~~json
"extends": [ "@tuimao/eslint/ts-vue@3" ]
~~~
### typescript
~~~json
"extends": [ "@tuimao/eslint/typescript" ]
~~~
### all rules
~~~json
"extends": [ "@tuimao/eslint/all" ]
~~~