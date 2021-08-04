"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeHtmlStrTagAttr = exports.setHtmlStrTagAttr = exports.formatUnix = exports.filterInteger = exports.filterPrice = exports.removeStrCode = void 0;
/*
 * @Author: Mr.Mao
 * @Date: 2021-08-03 13:57:13
 * @LastEditTime: 2021-08-03 13:58:47
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
const dayjs_1 = __importDefault(require("dayjs"));
/**
 * 剔除字符串代码字段
 * @param str 字符串
 * @returns 剔除字符串
 */
const removeStrCode = (str) => str.replace(/<[\/\!]*[^<>]*>/gi, '');
exports.removeStrCode = removeStrCode;
/**
* 过滤为价格(两位小数点)
* @param value 传入字符
*/
const filterPrice = (value) => {
    return value
        .replace(/^[^\d+]/, '')
        .replace(/[^\d{1,}.\d{1,}|\d{1,}]/g, '')
        .replace('.', '$#$')
        .replace(/\./g, '')
        .replace('$#$', '.')
        .replace(/\.{2,}/g, '.')
        .replace(/^(-)*(\d+)\.(\d\d).*$/, '$1$2.$3');
};
exports.filterPrice = filterPrice;
/**
 * 过滤为正整数
 * @param value 传入字符
 */
const filterInteger = (value) => {
    return value.replace(/^(0+)|[^\d]+/g, '');
};
exports.filterInteger = filterInteger;
/**
 * 时间戳格式化(秒)
 * @param timestamp 格式化时间戳(秒)
 * @param format 格式化时间格式
 * @returns 格式时间字符串
 */
const formatUnix = (timestamp, format = 'YYYY-MM-DD HH:mm:ss') => {
    return dayjs_1.default.unix(timestamp).format(format);
};
exports.formatUnix = formatUnix;
/**
 * 替换 html string 中任意 tag 内任意 attr 值
 * @param html html string
 * @param option
 * @returns
 */
const setHtmlStrTagAttr = (html, option) => {
    if (typeof html !== 'string') {
        throw new Error('error: html is not string');
    }
    const tags = Array.isArray(option.tag) ? option.tag : [option.tag];
    const transform = (html, tag) => {
        const replaceReg = new RegExp('<' + tag + '[^>]*(' + option.attr + '=[\'"](.*?)[\'"])?[^>]*>', 'gi');
        const subReg = new RegExp(`${option.attr}=['"](.*?)['"]`, 'gis');
        const setHtmlStr = html.replace(replaceReg, (match) => {
            //包含option.attr属性,替换option.attr
            if (match.indexOf(option.attr) > 0) {
                return match.replace(subReg, `${option.attr}="${option.value}"`);
            }
            //不包含option.attr属性,添加option.attr
            const prefix = match.substr(0, tag.length + 1);
            let suffix = match.substr(tag.length + 2, match.length);
            suffix = suffix ? ` ${suffix}` : '>';
            return `${prefix} ${option.attr}="${option.value}"${suffix}`;
        });
        if (!option.value) {
            return setHtmlStr.replace(subReg, '');
        }
        return setHtmlStr;
    };
    return tags.reduce((total, tag) => transform(total, tag), html);
};
exports.setHtmlStrTagAttr = setHtmlStrTagAttr;
/**
 * 移除所有标签的一个或多个属性
 * @param html html string
 * @param attr attr string
 * @returns html
 */
const removeHtmlStrTagAttr = (html, attr) => {
    const attrs = Array.isArray(attr) ? attr : [attr];
    return attrs.reduce((total, attr) => total.replace(new RegExp(`${attr}=['"](.*?)['"]`, 'gis'), ''), html);
};
exports.removeHtmlStrTagAttr = removeHtmlStrTagAttr;
//# sourceMappingURL=format.js.map