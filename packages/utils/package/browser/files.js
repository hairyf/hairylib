"use strict";
/*
 * @Author: Mr.Mao
 * @Date: 2021-07-31 14:52:36
 * @LastEditTime: 2021-07-31 15:11:06
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFileReader = exports.downloadBlobFile = exports.downloadWorkFile = exports.selectImages = exports.selectFiles = void 0;
const lodash_1 = require("lodash");
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
 * 下载网络文件
 * @param url 下载地址
 * @param fileName 文件名称
 */
const downloadWorkFile = (url, fileName) => {
    const a = document.createElement('a');
    fileName && (a.download = fileName);
    a.href = url;
    a.click();
};
exports.downloadWorkFile = downloadWorkFile;
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
 * 读取 File 文件
 * @param formType 转换形式
 * @param file 文件
 */
const readFileReader = (formType, file) => {
    return new Promise((resole, reject) => {
        if (typeof FileReader === 'undefined') {
            console.warn('当前环境不支持使用 FileReader Api');
            return reject();
        }
        const reader = new FileReader();
        reader[formType](file);
        reader.onloadend = function () {
            if (lodash_1.isNull(this.result))
                reject();
            else
                resole(this.result);
        };
    });
};
exports.readFileReader = readFileReader;
//# sourceMappingURL=files.js.map