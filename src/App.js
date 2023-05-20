import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import TodoList from './components/todo/TodoList';
import AddTodoForm from './components/todo/AddTodoForm';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <AddTodoForm />
        <hr />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;

