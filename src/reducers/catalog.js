const initialState = {
    sortFlag: 'nameASC',
    minPriceInit: 0,
    maxPriceInit: 0,
    minPrice: 0,
    maxPrice: 0,
    filters: {}
};

export default function catalog (state = initialState, action) {
    switch(action.type) {
        case 'CHANGE_SORT':
            return {
                ...state,
                sortFlag: action.sortFlag,
            };
        case 'CHANGE_FILTER':
            const changeProperty = () => (!state.filters[action.filterName].includes(action.filterValue) && action.filterCheck) ?
                [...state.filters[action.filterName], action.filterValue] :
                [...state.filters[action.filterName].filter(n => n !== action.filterValue)];
            const setProperty = () => [action.filterValue];

            return {
                ...state,
                filters: {
                    ...state.filters,
                    [action.filterName]: (action.filterName in state.filters) ? changeProperty() : setProperty(),
                }
            };
        case 'RESET_FILTER':
            return {
                ...state,
                filters: {},
                minPrice: state.minPriceInit,
                maxPrice: state.maxPriceInit,
            };
        case 'INIT_PRICE_FILTER':
            return {
                ...state,
                minPriceInit: action.minPriceInit,
                maxPriceInit: action.maxPriceInit,
                minPrice: action.minPriceInit,
                maxPrice: action.maxPriceInit,
            };
        case 'CHANGE_MIN_PRICE':
            return {
                ...state,
                minPrice: action.minPrice,
            };
        case 'CHANGE_MAX_PRICE':
            return {
                ...state,
                maxPrice: action.maxPrice,
            };
        default:
            return state;
    }
}
