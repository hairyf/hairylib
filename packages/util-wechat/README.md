# @hairy/wechat-jssdk

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

WechatJssdk 构造函数对 [wechat-jssdk](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html) 的 `api` 进行了 `promise` 处理，并且可直接调用，不需要执行 `wx.ready` 等待 `jssdk` 授权完毕。

初始化不需要执行 `wx.config`，内部会根据传入的 `config request`，请求签名并自动调用 `wx.config`。

## Install

```
ni @hairy/wechat-jssdk
```

## CDN

```html
<script src="https://unpkg.com/@hairy/wechat-jssdk"></script>
```

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

await wxJssdk.updateAppMessageShareData({
  title: '...',
  desc: '...',
  link: '...',
  imgUrl: '...'
})
```

> api 与 [wechat-jssdk](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html) 保持一致。

## License

[MIT](./LICENSE) License © [Hairyf](https://github.com/hairyf)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@hairy/wechat-jssdk?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@hairy/wechat-jssdk
[npm-downloads-src]: https://img.shields.io/npm/dm/@hairy/wechat-jssdk?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@hairy/wechat-jssdk
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@hairy/wechat-jssdk?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@hairy/wechat-jssdk
[license-src]: https://img.shields.io/github/license/hairyf/hairylib.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/hairyf/hairylib/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@hairy/wechat-jssdk
