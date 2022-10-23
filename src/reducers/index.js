import { createStore, combineReducers } from 'redux';
import basket from './basket';
import favorite from './favorite';
import {loadState, saveState} from "./cookie";

const reducers = combineReducers({
    basket: basket,
    favorite: favorite,
});

const cookiesState = {
    basket: loadState('basket'),
    favorite: loadState('favorite'),
};

export const store = createStore(reducers, cookiesState);

store.subscribe(() => {
    saveState('basket', store.getState().basket);
});
store.subscribe(() => {
    saveState('favorite', store.getState().favorite);
});

export default store;
