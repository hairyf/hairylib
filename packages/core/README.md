# @hairy/core

通用的 api 逻辑。

## Install

`yarn add @hairy/core`

## Usage apis

- removeStringCode:  去除字符串中的 html 字段
- filterPrice:       过滤为价格(两位小数点)
- filterInteger:     过滤为正整数
- formatUnix:        时间戳格式化(秒)
- analyUnit:         如果有单位，如百分比，px单位等，直接返回，如果是纯粹的数值，则加上单位
- analySize:         将 size 转换为宽高
- urlParamsAnaly:    urlParams 对象解析器
- awaitPromise:      自定义等待时长的 promise
- generateArray:     生成递进数组
- pickByParams:      根据数组过滤对象或数组
- formDataToObject:  将 formData 转换为 ojbect
- objectToFormData:  将 object 转换为 formData
- objectFlat:        对象的扁平化处理
- checkedTypeof:     返回类型字符串
- assert:            不符合预期则弹出警告
- isClient:          是否是客户端环境(浏览器)
- isFormData:        是否是 formData
- isWindow:          值是否是 window

## Usage typescript

- AnyOjbect:    值是 any 的对象
- Key:          number 与 string
- DeepReadonly: 深层转换只读
- DeepRequired: 深层转换必有
- DeepPartial:  深层转换非必有
- DeepKeyof:    深层读取对象中所有的 key 值
- DeepReplace:  深层更改对应 key 的 value 类型