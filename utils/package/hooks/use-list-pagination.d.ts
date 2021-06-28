import { Ref } from 'vue';
interface UseListPaginationOpts<T extends any[]> {
    /** 初始化列表 */
    list?: Ref<T>;
    /** 获取列表数据 */
    getList: (option: ReturnType<typeof useListPagination>) => T | Promise<T>;
    /** 是否初始化(根据当前配置获取一次列表) */
    init?: boolean;
    /** 分页长度 */
    pageSize?: number;
    /** 总条数 */
    total?: number;
    /** 当前页 */
    currentPage?: number;
    /** 监视属性(刷新列表) */
    sources?: any[];
}
/** 默认配置 */
export declare const defaultOption: {
    list: Ref<never[]>;
    init: boolean;
    pageSize: number;
    total: number;
    currentPage: number;
    sources: never[];
};
/**
 * 分页数组逻辑钩子
 * @param UseListPaginationOpts
 * @returns
 * list, resetList, ...PaginationResult
 */
export declare const useListPagination: <T extends any[]>(opts: UseListPaginationOpts<T>) => {
    pageSize: Ref<number>;
    total: Ref<number>;
    currentPage: Ref<number>;
    offset: Ref<number>;
    lastPage: Readonly<Ref<number>>;
    next: import("vue-composable").PaginationControl;
    prev: import("vue-composable").PaginationControl;
    first: import("vue-composable").PaginationControl;
    last: import("vue-composable").PaginationControl;
    list: Ref<T>;
    resetList: () => Promise<void>;
};
export {};
