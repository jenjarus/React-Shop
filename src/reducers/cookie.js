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
    try {
        document.cookie = `${key}=${JSON.stringify(state)}; max-age=60; path=/;`;
    } catch (err) {

    }
};
