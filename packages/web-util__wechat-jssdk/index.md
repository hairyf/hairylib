---
category: '@wechat-jssdk'
---

# Wechat Jssdk

WechatJssdk 构造函数对 [wechat-jssdk](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html) 的 api 进行了 promise 处理，并且可直接调用，不需要执行 wx.ready 等待 jssdk 授权完毕。

初始化不需要执行 wx.config，内部会根据传入的 config request，请求签名并自动调用 wx.config。

## Install

~~~sh
npm install @hairy/wechat-jssdk
~~~

## Usage
```ts
import { WechatJssdk } from '@hairy/wechat-jssdk'

export const wxJssdk = new WechatJssdk({
  requestConfig: async () => {
    return { 
      appId: '...',
      jsApiList: ['onMenuShareAppMessage'],
      nonceStr: '...',
      signature: '...',
      timestamp: 13_123
    }
  }
})
```

## API 

api 与 [wechat-jssdk](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html) 保持一直，直接看 [官方文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html) 即可。
