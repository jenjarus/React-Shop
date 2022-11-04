import { createStore, combineReducers } from 'redux';
import basket from './basket';
import favorite from './favorite';
import viewed from './viewed';
import users from './users';
import {loadState, saveState} from "./cookie";

const reducers = combineReducers({
    basket: basket,
    favorite: favorite,
    viewed: viewed,
    users: users,
});

const cookiesState = {
    basket: loadState('basket'),
    favorite: loadState('favorite'),
    viewed: loadState('viewed'),
    users: loadState('users'),
};

export const store = createStore(reducers, cookiesState);

store.subscribe(() => {
    saveState('basket', store.getState().basket);
});
store.subscribe(() => {
    saveState('favorite', store.getState().favorite);
});
store.subscribe(() => {
    saveState('viewed', store.getState().viewed);
});
store.subscribe(() => {
    saveState('users', store.getState().users);
});

export default store;
