"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assert = exports.checkedTypeof = void 0;
/*
 * @Author: Mr.Mao
 * @Date: 2021-07-30 17:39:05
 * @LastEditTime: 2021-07-31 14:47:42
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
//# sourceMappingURL=is.js.map