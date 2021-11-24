---
nav:
  path: /guide
  title: 指南
group:
  path: /wechat-jssdk
  title: 微信公众号
title: WechatJssdk
---

### 微信公众号 jssdk 基本使用

WechatJssdk 构造函数对 [wechat-jssdk](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html) 的 api 进行了 promise 处理，并且可直接调用，不需要执行 wx.ready 等待 jssdk 授权完毕。

初始化不需要执行 wx.config，内部会根据传入的 env 环境，请求签名并自动调用 wx.config。

### 1. 初始化
```ts
// service/common.ts
import { WechatJssdk } from '@bbg/sfe-helper'

export const wxJssdk = new WechatJssdk({
  env: env.MODE,
  // 该 config 最终会传入 调用 wx.config 当中
  config: {
    // 授权 api 列表
    jsApiList: ['onMenuShareAppMessage']
  }
})
```

### 2. 页面使用

```ts
// pages/xxx/xxx.tsx
import { useMount } from 'ahooks'
import { wxJssdk } from 'service/common.ts';
const Com = () => {
  // useMount() => {} 等同与 useEffect(() => {}, [])
  useMount(() => {
    wxJssdk.onMenuShareAppMessage({
      title: '...',
      link: '...',
      desc: '...',
      imgUrl: '...',
      success: () => {/*  */},
      cancel: () => {/*  */}
    })
  })
  // ...
}
```

### API 

api 与 [wechat-jssdk](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html) 保持一直，直接看[官方文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html)即可。