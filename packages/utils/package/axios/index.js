/*
 * @Author: Mr.Mao
 * @Date: 2021-08-03 15:23:37
 * @LastEditTime: 2021-08-04 15:38:17
 * @Description: 
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.axiosPickByParams = exports.axiosValidate = exports.axiosLoading = void 0;
const lodash_1 = require('lodash');
const common_1 = require('../common');
/**
 * axios 全局加载提示
 * @param axios 实例
 * @param show 展示逻辑钩子
 * @param clone 关闭逻辑钩子
 */
const axiosLoading = (axios, show, clone) => {
    let requestCount = 0;
    axios.interceptors.request.use((config) => {
        if (config.loading) {
            !requestCount && show(config);
            requestCount++;
        }
        return config;
    });
    axios.interceptors.response.use((response) => {
        if (response.config.loading) {
            setTimeout(() => {
                requestCount--;
                !requestCount && clone(response.config, [response]);
            }, 100);
        }
        return response;
    }, (error) => {
        let _a;
        if ((_a = error.config) === null || _a === void 0 ? void 0 : _a.loading) {
            setTimeout(() => {
                requestCount--;
                !requestCount && clone(error.config, [undefined, error]);
            }, 100);
        }
        return error;
    });
};
exports.axiosLoading = axiosLoading;
/**
 * axios 校验器
 * @param axios 实例
 * @param validate 校验器
 * @param rejected 错误处理
 */
const axiosValidate = (axios, validate, rejected) => {
    const onFulfilled = (response) => {
        const validateResult = validate(response);
        const isError = typeof validateResult == 'boolean' && !validateResult;
        if (isError) {
            rejected(Object.assign(Object.assign(Object.assign({}, response), { response, isAxiosError: false, toJSON: () => ({}) }), new Error()));
            return Promise.reject(response);
        }
        return response;
    };
    const onRejected = (error) => {
        !error.config.preventError && rejected(error);
        return Promise.reject(error);
    };
    axios.interceptors.response.use(onFulfilled, onRejected);
};
exports.axiosValidate = axiosValidate;
/**
 * 根据过滤器, 过滤 body|params 参数
 * @param axios 实例
 * @param filters 过滤参数
 */
const axiosPickByParams = (axios, filters, option = {}) => {
    const { header = false, data = true, params = true, deep = false } = option;
    axios.interceptors.request.use((config) => {
        if (header) {
            if (lodash_1.isPlainObject(config.headers))
                config.headers = common_1.pickByParams(config.headers, filters, deep);
        }
        if (params) {
            if (lodash_1.isPlainObject(config.params))
                config.params = common_1.pickByParams(config.params, filters, deep);
        }
        if (data) {
            if (lodash_1.isPlainObject(config.data))
                config.data = common_1.pickByParams(config.data, filters, deep);
            if (config.data instanceof FormData) {
                const transformObject = common_1.formDataToObject(config.data);
                const pickByObject = common_1.pickByParams(transformObject, filters);
                config.data = common_1.objectToFormData(pickByObject);
            }
        }
        return config;
    });
};
exports.axiosPickByParams = axiosPickByParams;
//# sourceMappingURL=index.js.map