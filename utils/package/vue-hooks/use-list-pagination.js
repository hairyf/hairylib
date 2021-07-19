import { cloneDeep } from 'lodash';
import { usePagination } from 'vue-composable';
import { ref, watch } from 'vue';
/** 默认配置 */
export const defaultOption = {
    list: ref([]),
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
export const useListPagination = (opts) => {
    const pageOption = cloneDeep(Object.assign(Object.assign({}, defaultOption), opts));
    const list = pageOption.list;
    const pagination = usePagination({
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
        watch([pagination.currentPage, pagination.pageSize, ...pageOption.sources], resetList, {
            immediate: pageOption.init
        });
    });
    return result;
};
//# sourceMappingURL=use-list-pagination.js.map