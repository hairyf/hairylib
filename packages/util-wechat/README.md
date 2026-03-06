# @hairy/wechat-jssdk

<!-- automd:badges name="@hairy/wechat-jssdk" github="hairyf/hairylib" license bundlephobia -->

[![npm version](https://img.shields.io/npm/v/@hairy/wechat-jssdk)](https://npmjs.com/package/@hairy/wechat-jssdk)
[![npm downloads](https://img.shields.io/npm/dm/@hairy/wechat-jssdk)](https://npm.chart.dev/@hairy/wechat-jssdk)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@hairy/wechat-jssdk)](https://bundlephobia.com/package/@hairy/wechat-jssdk)
[![license](https://img.shields.io/github/license/hairyf/hairylib)](https://github.com/hairyf/hairylib/blob/main/LICENSE)

<!-- /automd -->

WechatJssdk 构造函数对 [wechat-jssdk](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html) 的 `api` 进行了 `promise` 处理，并且可直接调用，不需要执行 `wx.ready` 等待 `jssdk` 授权完毕。

初始化不需要执行 `wx.config`，内部会根据传入的 `config request`，请求签名并自动调用 `wx.config`。

## Install

<!-- automd:pm-install name="@hairy/wechat-jssdk" -->

```sh
# ✨ Auto-detect
npx nypm install @hairy/wechat-jssdk

# npm
npm install @hairy/wechat-jssdk

# yarn
yarn add @hairy/wechat-jssdk

# pnpm
pnpm add @hairy/wechat-jssdk

# bun
bun install @hairy/wechat-jssdk

# deno
deno install npm:@hairy/wechat-jssdk
```

<!-- /automd -->

### Example

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

## API

<!-- automd:jsdocs src="./src/index.ts" -->

### `WechatJssdk()`

<!-- /automd -->

## Directory structure

<!-- automd:dir-tree imports=""maxDepth=2 -->

```
├── src/
│   ├── internal/
│   │   └── load_script.ts
│   ├── helper.ts
│   ├── index.ts
│   └── types.ts
├── test/
│   └── index.test.ts
├── package.json
├── README.md
└── tsdown.config.ts
```

<!-- /automd -->

## Source

<!-- automd:file src="./src/index.ts" code lang="ts" -->

```ts [index.ts]
import type * as WxType from 'jweixin'
import type { WechatJssdkOptions } from './types'
import { WechatJssdkHelper } from './helper'

/**
 * @description WechatJssdk Api 封装，与 [jssdk 文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html) 保持一致，主要以下改动
 * @description 内置请求，读取 config 配置，初始化自动调用 wx.config
 * @description 所有 api 的 promise 化处理（仅等待 wx.ready）
 * @description 简易化初始化构建，config 处理
 * @description 可指定加载 jssdk 版本（默认 1.3.0）
 * @template `const wxJssdk = new WechatJssdk({env, config})`
 */
class WechatJssdk extends WechatJssdkHelper {
  constructor(options: WechatJssdkOptions) {
    super(options)
  }

  // --- 1.4.0 API start ---
  updateAppMessageShareData(options: WxType.IonMenuShareAppMessage) {
    return this.implement('updateAppMessageShareData', options)
  }

  updateTimelineShareData(options: WxType.IonMenuShareAppMessage) {
    return this.implement('updateTimelineShareData', options)
  }

  // --- 1.4.0 API end ---
  addCard() {
    return this.implement('addCard')
  }

  checkJsApi(options: WxType.IcheckJsApi) {
    return this.implement('checkJsApi', options)
  }

  chooseCard(options: WxType.IchooseCard) {
    return this.implement('chooseCard', options)
  }

  chooseImage(options: WxType.IchooseImage) {
    return this.implement('chooseImage', options)
  }

  chooseWXPay(options: WxType.IchooseWXPay) {
    return this.implement('chooseWXPay', options)
  }

  closeWindow() {
    return this.implement('closeWindow')
  }

  consumeAndShareCard(options: WxType.IconsumeAndShareCard) {
    return this.implement('consumeAndShareCard', options)
  }

  downloadImage(options: WxType.IdownloadImage) {
    return this.implement('downloadImage', options)
  }

  downloadVoice(options: WxType.IupdownloadVoice) {
    return this.implement('downloadVoice', options)
  }

  getLocalImgData(options: WxType.IgetLocalImgData) {
    return this.implement('getLocalImgData', options)
  }

  getLocation(options: WxType.IgetLocation) {
    return this.implement('getLocation', options)
  }

  getNetworkType(options: WxType.IgetNetworkType) {
    return this.implement('getNetworkType', options)
  }

  hideAllNonBaseMenuItem() {
    return this.implement('hideAllNonBaseMenuItem')
  }

  hideMenuItems(options: WxType.IhideMenuItems) {
    return this.implement('hideMenuItems', options)
  }

  hideOptionMenu() {
    return this.implement('hideOptionMenu')
  }

  onMenuShareAppMessage(options: WxType.IonMenuShareAppMessage) {
    return this.implement('onMenuShareAppMessage', options)
  }

  onMenuShareQQ(options: WxType.IonMenuShareQQ) {
    return this.implement('onMenuShareQQ', options)
  }

  onMenuShareQZone(options: WxType.IonMenuShareQZone) {
    return this.implement('onMenuShareQZone', options)
  }

  onMenuShareTimeline(options: WxType.IonMenuShareTimeline) {
    return this.implement('onMenuShareTimeline', options)
  }

  onMenuShareWeibo(options: WxType.IonMenuShareWeibo) {
    return this.implement('onMenuShareWeibo', options)
  }

  onSearchBeacons(options: WxType.IonSearchBeacons) {
    return this.implement('onSearchBeacons', options)
  }

  onVoicePlayEnd(options: WxType.IonVoicePlayEnd) {
    return this.implement('onVoicePlayEnd', options)
  }

  onVoiceRecordEnd(options: WxType.IonVoiceRecordEnd) {
    return this.implement('onVoiceRecordEnd', options)
  }

  openCard(options: WxType.IopenCard) {
    return this.implement('openCard', options)
  }

  openLocation(options: WxType.IopenLocation) {
    return this.implement('openLocation', options)
  }

  openProductSpecificView(options: WxType.IopenProductSpecificView) {
    return this.implement('openProductSpecificView', options)
  }

  pauseVoice(options: WxType.IplaypausestopVoice) {
    return this.implement('pauseVoice', options)
  }

  playVoice(options: WxType.IplaypausestopVoice) {
    return this.implement('playVoice', options)
  }

  previewImage(options: WxType.IpreviewImage) {
    return this.implement('previewImage', options)
  }

  scanQRCode(options: WxType.IscanQRCode) {
    return this.implement('scanQRCode', options)
  }

  showAllNonBaseMenuItem() {
    return this.implement('showAllNonBaseMenuItem')
  }

  showMenuItems(options: WxType.IshowMenuItems) {
    return this.implement('showMenuItems', options)
  }

  showOptionMenu() {
    return this.implement('showOptionMenu')
  }

  startRecord() {
    return this.implement('startRecord')
  }

  startSearchBeacons(options: WxType.IstartSearchBeacons) {
    return this.implement('startSearchBeacons', options)
  }

  stopRecord(options: WxType.IstopRecord) {
    return this.implement('stopRecord', options)
  }

  stopSearchBeacons(options: WxType.IstopSearchBeacons) {
    return this.implement('stopSearchBeacons', options)
  }

  stopVoice(options: WxType.IplaypausestopVoice) {
    return this.implement('stopVoice', options)
  }

  translateVoice(options: WxType.ItranslateVoice) {
    return this.implement('translateVoice', options)
  }

  uploadImage(options: WxType.IuploadImage) {
    return this.implement('uploadImage', options)
  }

  uploadVoice(options: WxType.IupdownloadVoice) {
    return this.implement('uploadVoice', options)
  }
}

export { WechatJssdk }
```

<!-- /automd -->

## Contributors

<!-- automd:contributors github="hairyf/hairylib" author="Hairyf" license="MIT" -->

Published under the [MIT](https://github.com/hairyf/hairylib/blob/main/LICENSE) license.
Made by [@Hairyf](https://github.com/Hairyf) and [community](https://github.com/hairyf/hairylib/graphs/contributors) 💛
<br><br>
<a href="https://github.com/hairyf/hairylib/graphs/contributors">
<img src="https://contrib.rocks/image?repo=hairyf/hairylib" />
</a>

<!-- /automd -->

## License

<!-- automd:fetch url="gh:hairyf/hairylib/main/LICENSE" -->

MIT License

Copyright (c) 2025-PRESENT Hairyf <https://github.com/antfu>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

<!-- /automd -->

<!-- automd:with-automd -->

---

_🤖 auto updated with [automd](https://automd.unjs.io)_

<!-- /automd -->
