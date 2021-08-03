"use strict";
/*
 * @Author: Mr.Mao
 * @Date: 2021-08-03 13:59:36
 * @LastEditTime: 2021-08-03 15:13:54
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.fuseThemeColor = exports.hexToRgba = exports.blendColor = void 0;
/**
 * 颜色混合器
 * @param colorOne 颜色值
 * @param colorTwo 颜色值
 * @param ratio 根据 colorTwo 混合比例, 0~1 区间, 1 则是完全的 colorTwo
 * @returns 混合颜色
 */
const blendColor = (colorOne, colorTwo, ratio) => {
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
exports.blendColor = blendColor;
/**
 * 将 hex 颜色转成 rgb
 * @param hex
 * @param opacity
 * @returns rgba String
 */
const hexToRgba = (hex, opacity) => {
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
exports.hexToRgba = hexToRgba;
/**
 * 根据颜色融合出黑色与白色, 透明度色
 * @param color
 */
const fuseThemeColor = (color) => ({
    'primaryColorLight-2': exports.blendColor('#ffffff', color, 0.8),
    'primaryColorLight-4': exports.blendColor('#ffffff', color, 0.6),
    'primaryColorLight-6': exports.blendColor('#ffffff', color, 0.4),
    'primaryColorLight-8': exports.blendColor('#ffffff', color, 0.2),
    'primaryColorDark-2': exports.blendColor('#000000', color, 0.8),
    'primaryColorDark-4': exports.blendColor('#000000', color, 0.6),
    'primaryColorDark-6': exports.blendColor('#000000', color, 0.4),
    'primaryColorDark-8': exports.blendColor('#000000', color, 0.2),
    'primaryColorOpacity-2': exports.hexToRgba(color, 0.8).rgba,
    'primaryColorOpacity-4': exports.hexToRgba(color, 0.6).rgba,
    'primaryColorOpacity-6': exports.hexToRgba(color, 0.4).rgba,
    'primaryColorOpacity-8': exports.hexToRgba(color, 0.2).rgba
});
exports.fuseThemeColor = fuseThemeColor;
//# sourceMappingURL=color.js.map