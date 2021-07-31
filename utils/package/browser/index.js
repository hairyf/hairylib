"use strict";
/*
 * @Author: Mr.Mao
 * @Date: 2021-06-28 16:37:00
 * @LastEditTime: 2021-07-31 15:15:26
 * @Description: 浏览器工具
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fuseThemeColor = exports.ejectWindow = exports.isFF = exports.isPhantomJS = exports.isChrome = exports.isIOS = exports.isAndroid = exports.isEdge = exports.isIE11 = exports.isIE9 = exports.isIE = exports.UA = exports.weexPlatform = exports.isWeex = exports.isBrowser = void 0;
const common_1 = require("../common");
exports.isBrowser = typeof window !== 'undefined';
exports.isWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
exports.weexPlatform = exports.isWeex && WXEnvironment.platform.toLowerCase();
exports.UA = exports.isBrowser && window.navigator.userAgent.toLowerCase();
exports.isIE = exports.UA && /msie|trident/.test(exports.UA);
exports.isIE9 = exports.UA && exports.UA.indexOf('msie 9.0') > 0;
exports.isIE11 = navigator.userAgent.indexOf('Trident') > -1 && navigator.userAgent.indexOf('rv:11.0') > -1;
exports.isEdge = exports.UA && exports.UA.indexOf('edge/') > 0;
exports.isAndroid = (exports.UA && exports.UA.indexOf('android') > 0) || exports.weexPlatform === 'android';
exports.isIOS = (exports.UA && /iphone|ipad|ipod|ios/.test(exports.UA)) || exports.weexPlatform === 'ios';
exports.isChrome = exports.UA && /chrome\/\d+/.test(exports.UA) && !exports.isEdge;
exports.isPhantomJS = exports.UA && /phantomjs/.test(exports.UA);
exports.isFF = typeof exports.UA == 'string' && exports.UA.match(/firefox\/(\d+)/);
__exportStar(require("./files"), exports);
/**
 * 跳转到新的页面
 * @param url 跳转url
 */
const ejectWindow = (url) => {
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.click();
};
exports.ejectWindow = ejectWindow;
/**
 * 根据颜色融合出黑色与白色, 透明度色
 * @param color
 * @returns
 */
const fuseThemeColor = (color) => ({
    'primaryColorLight-2': common_1.blendColor('#ffffff', color, 0.8),
    'primaryColorLight-4': common_1.blendColor('#ffffff', color, 0.6),
    'primaryColorLight-6': common_1.blendColor('#ffffff', color, 0.4),
    'primaryColorLight-8': common_1.blendColor('#ffffff', color, 0.2),
    'primaryColorDark-2': common_1.blendColor('#000000', color, 0.8),
    'primaryColorDark-4': common_1.blendColor('#000000', color, 0.6),
    'primaryColorDark-6': common_1.blendColor('#000000', color, 0.4),
    'primaryColorDark-8': common_1.blendColor('#000000', color, 0.2),
    'primaryColorOpacity-2': common_1.hexToRgba(color, 0.8).rgba,
    'primaryColorOpacity-4': common_1.hexToRgba(color, 0.6).rgba,
    'primaryColorOpacity-6': common_1.hexToRgba(color, 0.4).rgba,
    'primaryColorOpacity-8': common_1.hexToRgba(color, 0.2).rgba
});
exports.fuseThemeColor = fuseThemeColor;
//# sourceMappingURL=index.js.map