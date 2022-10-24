import { createStore, combineReducers } from 'redux';
import basket from './basket';
import favorite from './favorite';
import viewed from './viewed';
import {loadState, saveState} from "./cookie";

const reducers = combineReducers({
    basket: basket,
    favorite: favorite,
    viewed: viewed,
});

const cookiesState = {
    basket: loadState('basket'),
    favorite: loadState('favorite'),
    viewed: loadState('viewed'),
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

export default store;
