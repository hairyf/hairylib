import { Ref } from 'vue';
export declare type MultipleSelectList<T = {
    [key: string]: any;
}> = {
    select?: boolean;
} & T[];
export declare const useMultipleSelect: (list: Ref<MultipleSelectList>) => {
    empty: import("vue").ComputedRef<boolean>;
    selectItems: import("vue").ComputedRef<{
        [x: string]: any;
    }[]>;
    isSelectAll: Ref<boolean>;
    isSelect: import("vue").ComputedRef<boolean>;
};
