"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useListPagination = exports.defaultOption = void 0;
const lodash_1 = require("lodash");
const vue_composable_1 = require("vue-composable");
const vue_1 = require("vue");
/** 默认配置 */
exports.defaultOption = {
    list: vue_1.ref([]),
    init: true,
    pageSize: 10,
    total: 1,
    currentPage: 1,
    sources: []
};
/**
 * 分页数组逻辑钩子
 * @param UseListPaginationOpts
 * @returns
 * list, resetList, ...PaginationResult
 */
const useListPagination = (opts) => {
    const pageOption = lodash_1.cloneDeep(Object.assign(Object.assign({}, exports.defaultOption), opts));
    const list = pageOption.list;
    const pagination = vue_composable_1.usePagination({
        pageSize: pageOption.pageSize,
        total: pageOption.total,
        currentPage: pageOption.currentPage
    });
    /** 异步处理列表数据获取 */
    const asyncGetList = async () => {
        try {
            return await pageOption.getList(result);
        }
        catch (error) {
            return [];
        }
    };
    /** 重置列表选项与数据 */
    const resetList = async () => {
        list.value = await asyncGetList();
    };
    const result = Object.assign({ list, resetList }, pagination);
    /** 监视属性, 刷新列表 */
    setTimeout(() => {
        vue_1.watch([pagination.currentPage, pagination.pageSize, ...pageOption.sources], resetList, {
            immediate: pageOption.init
        });
    });
    return result;
};
exports.useListPagination = useListPagination;
//# sourceMappingURL=use-list-pagination.js.map