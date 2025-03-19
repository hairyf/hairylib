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
