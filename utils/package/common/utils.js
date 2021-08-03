"use strict";
/*
 * @Author: Mr.Mao
 * @Date: 2021-08-03 14:03:00
 * @LastEditTime: 2021-08-03 15:10:12
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectToFormData = exports.formDataToObject = exports.pickByParams = exports.generateArray = exports.awaitPromise = exports.paramsAnaly = void 0;
const lodash_1 = require("lodash");
/**
 * 地址参数计算
 * @param url 传入url
 * @param params 请求参数
 * @returns 拼接url
 */
const paramsAnaly = (url, params) => {
    const queryStr = Object.keys(params).map((key) => `${key}=${params[key]}`);
    if (queryStr.length > 0) {
        url += '?' + queryStr.join('&');
    }
    return url;
};
exports.paramsAnaly = paramsAnaly;
/**
 * 自定义 Promise 等待
 * @param code 等待时间
 */
const awaitPromise = (code = 1000) => {
    return new Promise((resolve) => setTimeout(resolve, code));
};
exports.awaitPromise = awaitPromise;
/**
 * 生成递进的数组
 * @param start 开始数值
 * @param end 结束数值
 * @returns 递进的数组
 */
const generateArray = (start, end) => {
    start = Number(start);
    end = Number(end);
    end = end > start ? end : start;
    return [...Array(end + 1).keys()].slice(start);
};
exports.generateArray = generateArray;
/**
 * 根据过滤返回对应数据
 * @param params
 * @param filters
 */
const pickByParams = (params, filters, deep = false) => {
    deep && lodash_1.forIn(params, (val, key) => {
        if (lodash_1.isObject(val))
            // @ts-ignore
            params[key] = exports.pickByParams(params[key], filters, deep);
    });
    const pickValue = lodash_1.pickBy(params, (value) => !filters.some((v) => value === v));
    if (Array.isArray(params)) {
        return Object.values(pickValue);
    }
    return pickValue;
};
exports.pickByParams = pickByParams;
/**
 * 将 formData 转换为 ojbect
 * @param formData
 */
const formDataToObject = (formData) => {
    return Object.fromEntries(formData.entries());
};
exports.formDataToObject = formDataToObject;
/**
 * 将 object 转换为 formData
 * @param object
 */
const objectToFormData = (object) => {
    const formData = new FormData();
    for (const [key, value] of Object.entries(object)) {
        formData.append(key, value);
    }
    return formData;
};
exports.objectToFormData = objectToFormData;
//# sourceMappingURL=utils.js.map