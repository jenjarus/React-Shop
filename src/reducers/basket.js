const initialState = {
    items: [],
};

export default function basket (state = initialState, action) {
    switch(action.type) {
        case 'SET_PRODUCT_TO_BASKET':
            const newItems = (state.items.length && state.items.find(item => item.id === action.item.id)) ? [...state.items.map(item => {
                (item.id === action.item.id) && (item.qty += action.item.qty);
                return item;
            })] : [...state.items, action.item];
            return {
                ...state,
                items: newItems,
            };
        case 'EDIT_PRODUCT_COUNT':
            return {
                ...state,
                items: [...state.items.map(item => {
                    if (item.id === action.id) {
                        item.qty = action.qty
                    }
                    return item;
                })]
            };
        case 'DELETE_PRODUCT':
            return {
                ...state,
                items: [...state.items.filter(item => item.id !== action.id)],
            };
        default:
            return state;
    }
}
