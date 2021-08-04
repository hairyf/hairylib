"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMultipleSelect = void 0;
/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2021-01-25 15:01:14
 * @LastEditTime: 2021-06-30 21:26:18
 * @Description: 多选列表逻辑
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
const vue_1 = require("vue");
const useMultipleSelect = (list) => {
    vue_1.watch(list, (newList) => {
        newList.forEach((item) => {
            if (typeof item.select !== 'undefined')
                return undefined;
            item.select = false;
        });
    });
    /** 当前是否为空 */
    const empty = vue_1.computed(() => list.value.length === 0);
    /** 当前选中的项列表 */
    const selectItems = vue_1.computed(() => list.value
        .filter((item) => item.select)
        .map((item) => {
        const newItem = Object.assign({}, item);
        delete newItem.select;
        return newItem;
    }));
    /** 当前是否为全选状态 */
    const isSelectAll = vue_1.ref(false);
    /** 当前是否已经选择 */
    const isSelect = vue_1.computed(() => !!list.value.find((item) => item.select));
    /** 是否全选(Ref)与是否全选(Computed)数据绑定 start */
    const selectAllComputed = vue_1.computed(() => !list.value.find((item) => !item.select));
    vue_1.watch(selectAllComputed, () => {
        if (selectAllComputed.value == isSelectAll.value)
            return undefined;
        isSelectAll.value = selectAllComputed.value;
    });
    vue_1.watch(isSelectAll, () => {
        if (selectAllComputed.value == isSelectAll.value)
            return undefined;
        list.value.forEach((item) => (item.select = isSelectAll.value));
    });
    /** 是否全选(Ref)与是否全选(Computed)数据绑定 end */
    return {
        empty,
        selectItems,
        isSelectAll,
        isSelect
    };
};
exports.useMultipleSelect = useMultipleSelect;
//# sourceMappingURL=use-multiple-select.js.map