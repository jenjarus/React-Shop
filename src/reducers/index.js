import { createStore, combineReducers } from 'redux';
import basket from './basket';
import favorite from './favorite';
import viewed from './viewed';
import users from './users';
import authentication from './authentication';
import {loadState, saveState} from "./cookie";

const reducers = combineReducers({
    basket: basket,
    favorite: favorite,
    viewed: viewed,
    users: users,
    authentication: authentication,
});

const cookiesState = {
    basket: loadState('basket'),
    favorite: loadState('favorite'),
    viewed: loadState('viewed'),
    users: loadState('users'),
    authentication: loadState('authentication'),
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
store.subscribe(() => {
    saveState('authentication', store.getState().authentication);
});

export default store;
