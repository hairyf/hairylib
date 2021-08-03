"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analySize = exports.analyUnit = void 0;
/*
 * @Author: Mr.Mao
 * @Date: 2021-08-03 13:56:26
 * @LastEditTime: 2021-08-03 13:56:48
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
/**
 * 如果有单位，如百分比，px单位等，直接返回，如果是纯粹的数值，则加上px单位
 * @param unit 单元
 * @returns string
 */
const analyUnit = (unit) => {
    return typeof unit === 'string' && /[^0-9]/g.test(unit) ? unit : unit + 'px';
};
exports.analyUnit = analyUnit;
/**
 * 将 size 转换为宽高
 * @param size { AnalySizeOption }
 * @returns
 */
const analySize = (size) => {
    // 单数值正方形
    if (typeof size === 'string' || typeof size === 'number') {
        return { width: exports.analyUnit(size), height: exports.analyUnit(size) };
    }
    // 数组形式尺寸
    if (Array.isArray(size)) {
        return {
            width: exports.analyUnit(size[0]),
            height: exports.analyUnit(size[1])
        };
    }
    // 对象形式尺寸
    if (typeof size === 'object') {
        return {
            width: exports.analyUnit(size.width),
            height: exports.analyUnit(size.height)
        };
    }
    return { width: '', height: '' };
};
exports.analySize = analySize;
//# sourceMappingURL=size.js.map