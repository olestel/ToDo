import { createSelector } from 'reselect';

export const getTodosData = (state) => state.todosData || {};

export const getTodos = createSelector(getTodosData, ({ todos }) => todos || []);