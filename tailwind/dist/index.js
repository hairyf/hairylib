"use strict";
/*
 * @Author: Mr.Mao
 * @Date: 2021-06-18 14:02:44
 * @LastEditTime: 2021-06-18 15:23:19
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const defaults_1 = require("./defaults");
console.log(defaults_1.defaults);
/**
 * 初始化返回预设
 * @param config 深层合并预设
 * @returns 预设
 */
const mergePresets = (config = {}) => {
    return lodash_1.merge(defaults_1.defaults, config);
};
exports.default = mergePresets;
