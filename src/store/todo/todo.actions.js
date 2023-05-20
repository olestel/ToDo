import { ADD_TODO, CHANGE_TODO_STATE } from "./todo.constants";

export function addTodo(todo) {
  return { type: ADD_TODO, todo };
}

export function changeTodoState(id) {
  return { type: CHANGE_TODO_STATE, id };
}