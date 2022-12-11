const initialState = {
    items: [],
};

export default function viewed (state = initialState, action) {
    switch(action.type) {
        case 'SET_PRODUCT_TO_VIEWED':
            let newArr = [];
            const newItems = (state.items.length && state.items.find((id) => id === action.id)) ?
                newArr.concat(action.id, [...state.items.filter(id => id !== action.id)]).slice(0, 4) :
                newArr.concat(action.id, [...state.items]).slice(0, 4);
            return {
                ...state,
                items: newItems,
            };
        default:
            return state;
    }
}
