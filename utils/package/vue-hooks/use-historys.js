"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHistorys = void 0;
/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2021-01-25 15:25:06
 * @LastEditTime: 2021-03-01 17:27:02
 * @Description: 历史记录逻辑钩子
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
const vue_1 = require("vue");
const useHistorys = (store) => {
    const historys = vue_1.ref(store.get());
    // 添加历史记录
    const unshiftHistory = (searchText) => {
        const oldIndex = historys.value.indexOf(searchText);
        if (oldIndex !== -1)
            historys.value.splice(oldIndex, 1);
        historys.value.unshift(searchText);
        if (historys.value.length > 8) {
            historys.value.splice(historys.value.length - 1, 1);
        }
    };
    // 移除历史记录
    const removeHistory = () => {
        historys.value = [];
    };
    // 监听记录
    vue_1.watch(historys, (values) => store.set(values));
    // 返回钩子
    return { unshiftHistory, removeHistory, list: historys };
};
exports.useHistorys = useHistorys;
//# sourceMappingURL=use-historys.js.map