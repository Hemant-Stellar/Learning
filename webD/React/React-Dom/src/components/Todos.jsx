import React from 'react'
import { useState } from 'react'
import { createTodos } from './Efficiency/memo/utils'

const Todos = () => {
    const [todos, setTodos] = useState(createTodos());
    const [filter, setFilter] = useState('ALL');
    const[isDark,setIsDark] = useState(false);

    const filteredTodos = todos.filter(todo => {
        if (filter === 'ALL') return true;
        if (filter === 'COMPLETED') return todo.completed;
        if (filter === 'NOT_COMPLETED') return !todo.completed;
    });

    return (
        <div>
            <div>
                <button onClick={() => setFilter('ALL')}>ALL</button>
                <button onClick={() => setFilter('COMPLETED')}>Completed</button>
                <button onClick={() => setFilter('NOT_COMPLETED')}>Not Completed</button>
                <input type = 'checkbox'
                onChange={(e)=>setIsDark(e.target.checked)}/> Dark Mode
            </div>
            <ul>
                {filteredTodos.map(todo => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todos;