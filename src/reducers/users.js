const initialState = {
    users: [
        {
            id: '1667648315040',
            login: 'admin',
            password: '12345678',
            phone: '+7 (999) 999-99-99',
            email: 'admin@admin.com',
        }
    ],
};

export default function users (state = initialState, action) {
    switch(action.type) {
        case 'SET_SIGNUP':
            const newUsers = (state.users.length && state.users.find(user => user.name !== action.user.name)) && [...state.users, action.user];
            return {
                ...state,
                users: newUsers,
            };
        default:
            return state;
    }
}
