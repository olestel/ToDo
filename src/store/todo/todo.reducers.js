import { ADD_TODO, CHANGE_TODO_STATE } from './todo.constants';
import todoListMocks from '../../helpers/mocks/todos.json';

const initialState = {
  todos: todoListMocks,
};

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [action.todo, ...state.todos]
      };

    case CHANGE_TODO_STATE:
      const todoListWithoutItemToChange = state.todos.filter(todo => todo.id !== action.id);
      const itemToChange = state.todos.find(todo => todo.id === action.id);

      if (itemToChange.done) {
        return { todos: [
          { ...itemToChange, done: !itemToChange.done },
          ...todoListWithoutItemToChange
        ]};
      }

      return { todos: [
        ...todoListWithoutItemToChange,
        { ...itemToChange, done: !itemToChange.done }
      ]};

    default:
      return state;
  }
}