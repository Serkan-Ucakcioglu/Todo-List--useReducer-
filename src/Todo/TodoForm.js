import React from 'react';

const TodoList = () => {
    return (
        <div>
            <div className="form">
                <input type="text" placeholder='Todo...' />
                <button type='submit'>add</button>
            </div>
        </div>
    )
}


export default TodoList;