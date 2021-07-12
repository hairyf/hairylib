interface HistorysStorage {
    get: () => string[];
    set: (historys: string[]) => void;
}
export declare const useHistorys: (store: HistorysStorage) => {
    unshiftHistory: (searchText: string) => void;
    removeHistory: () => void;
    list: import("vue").Ref<string[]>;
};
export {};
