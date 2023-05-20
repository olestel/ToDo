import { combineReducers, createStore } from 'redux';
import { todoReducer } from './todo/todo.reducers';

export const reducers = combineReducers({
    todosData: todoReducer,
});

const initialState = {};

const store = createStore(reducers, initialState);

export default store;