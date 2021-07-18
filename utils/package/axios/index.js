"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.axiosPickByParams = exports.axiosValidate = exports.axiosLoading = void 0;
const common_1 = require("../common");
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
            requestCount--;
            !requestCount && clone(response.config, [response]);
        }
        return response;
    }, (error) => {
        var _a;
        if ((_a = error.config) === null || _a === void 0 ? void 0 : _a.loading) {
            requestCount--;
            !requestCount && clone(error.config, [, error]);
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
            rejected(Object.assign(Object.assign(Object.assign({}, response), { response: response, isAxiosError: false, toJSON: () => ({}) }), new Error()));
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
const axiosPickByParams = (axios, filters) => {
    axios.interceptors.request.use((config) => {
        if (config.data) {
            config.data = common_1.pickByParams(config.data, filters);
        }
        if (config.params) {
            config.params = common_1.pickByParams(config.params, filters);
        }
        return config;
    });
};
exports.axiosPickByParams = axiosPickByParams;
//# sourceMappingURL=index.js.map