const initialState = {
    items: [],
};

export default function viewed (state = initialState, action) {
    switch(action.type) {
        case 'SET_PRODUCT_TO_VIEWED':
            const newItems = (state.items.length && state.items.find((id) => id === action.id)) ?
                [...state.items.filter(id => id !== action.id).concat(action.id).slice(-4)] :
                [...state.items.concat(action.id).slice(-4)];
            return {
                ...state,
                items: newItems,
            };
        default:
            return state;
    }
}
