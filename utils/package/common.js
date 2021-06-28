/*
 * @Author: Mr.Mao
 * @Date: 2021-06-28 16:47:04
 * @LastEditTime: 2021-06-28 16:48:57
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
 * 过滤字符串为数值
 * @param str 字符串
 * @returns 数值
 */
export const filterNumber = (str) => {
    const filterStr = str.replace(/[^0-9]/g, '');
    const outCount = filterStr !== '' ? Number(filterStr) : filterStr;
    return outCount;
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
//# sourceMappingURL=common.js.map