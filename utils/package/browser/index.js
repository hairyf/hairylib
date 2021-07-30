"use strict";
/*
 * @Author: Mr.Mao
 * @Date: 2021-06-28 16:37:00
 * @LastEditTime: 2021-07-30 15:31:58
 * @Description: 浏览器工具
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.fuseThemeColor = exports.downloadBlobFile = exports.downloadFile = exports.selectImages = exports.selectFiles = exports.ejectWindow = exports.isFF = exports.isPhantomJS = exports.isChrome = exports.isIOS = exports.isAndroid = exports.isEdge = exports.isIE11 = exports.isIE9 = exports.isIE = exports.UA = exports.weexPlatform = exports.isWeex = exports.isBrowser = void 0;
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
 * 选择多个文件
 * @param option
 * @returns {FileList}
 */
const selectFiles = (option = {}) => {
    const { multiple = true, accept } = option;
    return new Promise((resolve, reject) => {
        const inputEl = document.createElement('input');
        inputEl.type = 'file';
        inputEl.multiple = multiple;
        accept && (inputEl.accept = accept);
        inputEl.click();
        const timer = setTimeout(reject, 20 * 1000);
        inputEl.addEventListener('change', function () {
            if (this.files) {
                resolve(Object.values(this.files));
                clearTimeout(timer);
            }
        });
    });
};
exports.selectFiles = selectFiles;
/**
 * 选择多个图片
 * @returns {FileList}
 */
const selectImages = () => {
    return exports.selectFiles({ multiple: true, accept: 'image/jpeg,image/x-png,image/gif' });
};
exports.selectImages = selectImages;
/**
 * 下载文件
 * @param url 下载地址
 * @param fileName 文件名称
 */
const downloadFile = (url, fileName) => {
    const a = document.createElement('a');
    fileName && (a.download = fileName);
    a.href = url;
    a.click();
};
exports.downloadFile = downloadFile;
/**
 * 生成 blob 文件，并下载
 * @param data blob 数据，或者字符串
 * @param name 文件名称
 */
const downloadBlobFile = (data, name) => {
    const blob = new Blob([data]);
    const link = document.createElement('a');
    const url = window.URL.createObjectURL(blob);
    link.href = url;
    link.download = name;
    link.click();
};
exports.downloadBlobFile = downloadBlobFile;
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