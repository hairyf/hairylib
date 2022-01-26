---
title: axiosProtoApiModify
category: 'Axios'
---

### axiosProtoApiModify

涉及 delete, get, head, options 等方法的修改，主要参数调整 (url, config) -> (url, params, config)

## Install

`npm install @hairy/axios -g`

## Usage

~~~typescript
import axios from 'axios'
import { axiosProtoApiModify } from '@hairy/axios'
// 默认不传或者传 axios 本身, 修改 axios 以及之后创建的所有实例
axiosProtoApiModify()
axios.get('xxx', { offset: 10 }, {/* config */})
~~~

~~~typescript
import axios from 'axios'
const instance = axios.create()
// 传入实例则修改当前实例
axiosProtoApiModify(instance)
instance.get('xxx', { offset: 10 }, {/* config */})
~~~