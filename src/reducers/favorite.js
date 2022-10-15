const initialState = {
    items: [],
};

export default function basket (state = initialState, action) {
    switch(action.type) {
        case 'SET_PRODUCT_TO_FAVORITE':
            const newItems = (state.items.length && state.items.find((id) => id === action.id)) ? state.items : [...state.items, action.id];
            return {
                ...state,
                items: newItems,
            };
        case 'DELETE_PRODUCT_TO_FAVORITE':
            return {
                ...state,
                items: [...state.items.filter(item => item !== action.id)],
            };
        default:
            return state;
    }
}
