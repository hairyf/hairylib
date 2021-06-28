import { debounce } from "lodash";
/**
 * axios 全局加载提示
 * @param axios 实例
 * @param show 展示逻辑钩子
 * @param clone 关闭逻辑钩子
 */
export const axiosLoading = (axios, show, clone) => {
    axios.interceptors.request.use((config) => {
        if (config.loading) {
            show(config);
        }
        return config;
    });
    axios.interceptors.response.use((response) => {
        if (response.config.loading) {
            clone(response.config, [response]);
        }
        return response;
    }, (error) => {
        var _a;
        if ((_a = error.config) === null || _a === void 0 ? void 0 : _a.loading) {
            clone(error.config, [, error]);
        }
        return error;
    });
};
/**
 * axios 校验器
 * @param axios 实例
 * @param validate 校验器
 * @param rejected 错误处理
 */
export const axiosValidate = (axios, validate, rejected) => {
    const onFulfilled = (response) => {
        const validateResult = validate(response.config, [response]);
        const isError = typeof validateResult == 'boolean' && !validateResult;
        if (isError) {
            rejected(Object.assign(Object.assign(Object.assign({}, response), { response: response, isAxiosError: false, toJSON: () => ({}) }), new Error()));
            return Promise.reject(response);
        }
        return response;
    };
    const onRejected = (error) => {
        rejected(error);
        return Promise.reject(error);
    };
    axios.interceptors.response.use(onFulfilled, onRejected);
};
/**
 * 创建防抖错误处理函数
 * @param wait
 * @param option
 */
export const createDebounceErr = (wait, option) => {
    const debounceFun = debounce((cb) => cb(), wait || 500, option || { leading: true, trailing: false });
    const debounceErr = (callback) => {
        const deb = (...args) => {
            debounceFun(() => callback(...args));
        };
        return deb;
    };
    return debounceErr;
};
//# sourceMappingURL=axios.js.map