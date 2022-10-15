import { createStore, combineReducers } from 'redux';
import basket from './basket';
import favorite from './favorite';

const reducers = combineReducers({
    basket: basket,
    favorite: favorite,
});

const store = createStore(reducers);

export default store;
