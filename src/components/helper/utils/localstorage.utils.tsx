interface LocalStoreUtilType {
    store_data: (key: string, data: unknown) => boolean;
    get_data: (key: string) => unknown | false;
    remove_data: (key: string) => boolean;
    remove_all: () => boolean;
}

const localStoreUtil: LocalStoreUtilType = {
    store_data: (key: string, data: unknown) => {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    },

    get_data: (key: string): unknown | false => {
        const item = localStorage?.getItem(key);
        if (!item) {
            return false;
        } else {
            return JSON.parse(item);
        }
    },

    remove_data: (key: string) => {
        localStorage.removeItem(key);
        return true;
    },

    remove_all: () => {
        localStorage.clear();
        return true;
    },
};

export default localStoreUtil;