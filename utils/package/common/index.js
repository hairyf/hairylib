/*
 * @Author: Mr.Mao
 * @Date: 2021-06-28 16:47:04
 * @LastEditTime: 2021-07-13 11:47:36
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
/**
 * 获取数据类型
 * @param target 检测对象
 * @returns 返回字符串
 */
export const checkedTypeof = (target) => {
    return Object.prototype.toString.call(target).slice(8, -1);
};
/**
 * 剔除字符串代码字段
 * @param str 字符串
 * @returns 剔除字符串
 */
export const removeStrCode = (str) => {
    return str.replace(/<[\/\!]*[^<>]*>/ig, "");
};
/**
 * 如果有单位，如百分比，px单位等，直接返回，如果是纯粹的数值，则加上px单位
 * @param unit 单元
 * @returns string
 */
export const analyUnit = (unit) => {
    return typeof unit === 'string' && /[^0-9]/g.test(unit) ? unit : unit + 'px';
};
/**
 * 过滤为价格(两位小数点)
 * @param value 传入字符
 */
export const filterPrice = (value) => {
    return value
        .replace(/^[^\d+]/, '')
        .replace(/[^\d{1,}.\d{1,}|\d{1,}]/g, '')
        .replace('.', '$#$')
        .replace(/\./g, '')
        .replace('$#$', '.')
        .replace(/\.{2,}/g, '.')
        .replace(/^(-)*(\d+)\.(\d\d).*$/, '$1$2.$3');
};
/**
 * 过滤为正整数
 * @param value 传入字符
 */
export const filterInteger = (value) => {
    return value.replace(/^(0+)|[^\d]+/g, '');
};
/**
 * 地址参数计算
 * @param url 传入url
 * @param params 请求参数
 * @returns 拼接url
 */
export const paramsAnaly = (url, params) => {
    const queryStr = Object.keys(params).map((key) => `${key}=${params[key]}`);
    if (queryStr.length > 0) {
        url += '?' + queryStr.join('&');
    }
    return url;
};
/**
 * 生成递进的数组
 * @param start 开始数值
 * @param end 结束数值
 * @returns 递进的数组
 */
export const generateArray = (start, end) => {
    start = Number(start);
    end = Number(end);
    end = end > start ? end : start;
    return [...Array(end + 1).keys()].slice(start);
};
/**
 * 颜色混合器
 * @param colorOne 颜色值
 * @param colorTwo 颜色值
 * @param ratio 根据 colorTwo 混合比例, 0~1 区间, 1 则是完全的 colorTwo
 * @returns 混合颜色
 */
export const blendColor = (colorOne, colorTwo, ratio) => {
    ratio = Math.max(Math.min(Number(ratio), 1), 0);
    const r1 = parseInt(colorOne.substring(1, 3), 16);
    const g1 = parseInt(colorOne.substring(3, 5), 16);
    const b1 = parseInt(colorOne.substring(5, 7), 16);
    const r2 = parseInt(colorTwo.substring(1, 3), 16);
    const g2 = parseInt(colorTwo.substring(3, 5), 16);
    const b2 = parseInt(colorTwo.substring(5, 7), 16);
    let r = Math.round(r1 * (1 - ratio) + r2 * ratio);
    let g = Math.round(g1 * (1 - ratio) + g2 * ratio);
    let b = Math.round(b1 * (1 - ratio) + b2 * ratio);
    r = ('0' + (r || 0).toString(16)).slice(-2);
    g = ('0' + (g || 0).toString(16)).slice(-2);
    b = ('0' + (b || 0).toString(16)).slice(-2);
    return '#' + r + g + b;
};
/**
 * 将 hex 颜色转成 rgb
 * @param hex
 * @param opacity
 * @returns rgba String
 */
export const hexToRgba = (hex, opacity) => {
    const RGBA = 'rgba(' +
        parseInt('0x' + hex.slice(1, 3)) +
        ',' +
        parseInt('0x' + hex.slice(3, 5)) +
        ',' +
        parseInt('0x' + hex.slice(5, 7)) +
        ',' +
        opacity +
        ')';
    return {
        red: parseInt('0x' + hex.slice(1, 3)),
        green: parseInt('0x' + hex.slice(3, 5)),
        blue: parseInt('0x' + hex.slice(5, 7)),
        rgba: RGBA
    };
};
//# sourceMappingURL=index.js.map