const initialState = {
    id: 0,
};

export default function authentication (state = initialState, action) {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                id: action.id,
            };
        case 'LOGOUT':
            return {
                ...state,
                id: 0,
            };
        default:
            return state;
    }
}
