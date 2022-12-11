export const changeSortFlag = (data) => {
    return {
        type: 'CHANGE_SORT',
        sortFlag: data,
    }
};

export const changeFilters = ({ target: { checked, value } }, nameFilter) => {
    return {
        type: 'CHANGE_FILTER',
        filterCheck: checked,
        filterValue: value,
        filterName: nameFilter,
    }
};

export const resetFilters = () => {
    return {
        type: 'RESET_FILTER',
    }
};

export const changeMinPrice = (value) => {
    return {
        type: 'CHANGE_MIN_PRICE',
        minPrice: value,
    }
};

export const changeMaxPrice = (value) => {
    return {
        type: 'CHANGE_MAX_PRICE',
        maxPrice: value,
    }
};

export const initPriceFilter = (min, max) => {
    return {
        type: 'INIT_PRICE_FILTER',
        minPriceInit: min,
        maxPriceInit: max,
    }
};
