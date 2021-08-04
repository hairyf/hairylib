"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWindow = exports.isArray = exports.isObject = exports.isString = exports.isNumber = exports.isFunction = exports.isBoolean = exports.isClient = exports.assert = exports.checkedTypeof = void 0;
/*
 * @Author: Mr.Mao
 * @Date: 2021-07-30 17:39:05
 * @LastEditTime: 2021-08-03 15:06:54
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
/**
 * 获取数据类型
 * @param target 检测对象
 * @returns 返回字符串
 */
const checkedTypeof = (target) => {
    return Object.prototype.toString.call(target).slice(8, -1);
};
exports.checkedTypeof = checkedTypeof;
/**
 * 不符合预期则弹出警告
 * @param condition
 * @param infos
 */
const assert = (condition, ...infos) => {
    // eslint-disable-next-line no-console
    if (!condition)
        console.warn(...infos);
    return condition;
};
exports.assert = assert;
exports.isClient = typeof window !== 'undefined';
const isBoolean = (val) => typeof val === 'boolean';
exports.isBoolean = isBoolean;
const isFunction = (val) => typeof val === 'function';
exports.isFunction = isFunction;
const isNumber = (val) => typeof val === 'number';
exports.isNumber = isNumber;
const isString = (val) => typeof val === 'string';
exports.isString = isString;
const isObject = (val) => toString.call(val) === '[object Object]';
exports.isObject = isObject;
const isArray = (val) => Array.isArray(val);
exports.isArray = isArray;
const isWindow = (val) => typeof window !== 'undefined' && toString.call(val) === '[object Window]';
exports.isWindow = isWindow;
//# sourceMappingURL=is.js.map