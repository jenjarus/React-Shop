export const loadState = (key) => {
    try {
        const serializedState = document.cookie.match(new RegExp(key + '=([^;]+)'));
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState[1]);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (key, state) => {
    const MAX_AGE = 86400; // 1 день

    try {
        document.cookie = `${key}=${JSON.stringify(state)}; max-age=${MAX_AGE}; path=/;`;
    } catch (err) {

    }
};
