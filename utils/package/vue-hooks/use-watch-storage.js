"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWatchSessionStorage = exports.useWatchLocalStorage = exports.useWatchStorage = void 0;
/*
 * @Author: Mr.Mao
 * @Date: 2021-07-23 09:16:55
 * @LastEditTime: 2021-07-23 09:41:51
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
const core_1 = require("@vueuse/core");
const vue_1 = require("vue");
const pubsub_js_1 = require("pubsub-js");
/**
 * 引入具有跨层级响应式缓存 Ref
 * @param key 缓存对应 key 值
 * @param defaultValue 缓存默认值
 */
const useWatchStorage = (key, defaultValue, options) => {
    let compare = Symbol('_compare_');
    const source = core_1.useStorage(key, defaultValue, options || exports.useWatchStorage.option);
    const target = vue_1.computed({
        get: () => source.value,
        set: (value) => {
            compare = Symbol('_compare_');
            pubsub_js_1.publish(`watch-store__${key}`, [compare, value]);
            source.value = value;
        }
    });
    const token = pubsub_js_1.subscribe(`watch-store__${key}`, (_, value) => {
        if (value[0] === compare)
            return undefined;
        compare = value[0];
        source.value = value[1];
    });
    vue_1.onUnmounted(() => pubsub_js_1.unsubscribe(token));
    return target;
};
exports.useWatchStorage = useWatchStorage;
exports.useWatchStorage.option = undefined;
/**
 * 引入具有跨层级响应式缓存 Ref (localStorage)
 * @param key 缓存对应 key 值
 * @param defaultValue 缓存默认值
 */
const useWatchLocalStorage = (key, defaultValue) => {
    return exports.useWatchStorage(key, defaultValue, window === null || window === void 0 ? void 0 : window.localStorage);
};
exports.useWatchLocalStorage = useWatchLocalStorage;
/**
 * 引入具有跨层级响应式缓存 Ref (sessionStorage)
 * @param key 缓存对应 key 值
 * @param defaultValue 缓存默认值
 */
const useWatchSessionStorage = (key, defaultValue) => {
    return exports.useWatchStorage(key, defaultValue, window === null || window === void 0 ? void 0 : window.sessionStorage);
};
exports.useWatchSessionStorage = useWatchSessionStorage;
//# sourceMappingURL=use-watch-storage.js.map