import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todo/todo.actions';

const AddTodoForm = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime().toString(),
            title: title.trim(),
            description: description.trim(),
            done: false
        };

        dispatch(addTodo(newTodo));
        setTitle('');
        setDescription('');
    };

    return (
        <div>
            <h2 style={{ display: 'flex', justifyContent: 'center' }}>Add New TODO</h2>

            <form
                onSubmit={handleSubmit}
                style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}
            >
                <label style={{ marginRight: '8px' }}>
                    Title:

                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>

                <br />

                <label style={{ marginRight: '16px' }}>
                    Description:

                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>

                <br />

                <button type="submit">Add TODO</button>
            </form>
        </div>
    );
};

export default AddTodoForm;
