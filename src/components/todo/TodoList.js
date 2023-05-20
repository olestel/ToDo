import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTodoState } from '../../store/todo/todo.actions';
import { getTodos } from '../../store/todo/todo.selectors';

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(getTodos);

    const handleTodoClick = (id) =>
        dispatch(changeTodoState(id));

    return (
        <div style={{ margin: '0 16px' }}>
            <h2 style={{ display: 'flex', justifyContent: 'center' }}>TODO List</h2>

            {todos.map(todo => (
                <div
                    key={todo.id}
                    style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
                    onClick={() => handleTodoClick(todo.id)}
                >
                    <input
                        type="checkbox"
                        checked={todo.done}
                        onChange={() => {}}
                    />
                    {todo.title}
                </div>
            ))}

        </div>
    );
};


export default TodoList;
