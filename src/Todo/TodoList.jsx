import React from 'react';

const TodoList = () => {
    return (
        <ul className='todo-list'>
            <li className='todo'>todo list
            <button>edit</button>
             <div>
             <button className='delete'>delete</button>
             </div>
            </li>
            <li className='todo'>todo list</li>
            <li className='todo'>todo list</li>
            <li className='todo'>todo list</li>
        </ul>
    )
}



export default TodoList;