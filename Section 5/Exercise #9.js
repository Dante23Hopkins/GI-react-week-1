import React from 'react';

import Todo from './Todo';
import './styles.css';

const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];
//Todo has access to these props, they give us a way to structure

export default function App() {
    return (
        <ul>
            {DUMMY_TODOS.map(todo => <Todo text={todo} />)}

        </ul>
    );
}