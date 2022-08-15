import React from "react";

const TodoList = () => {
  return (
    <ul className="todo-list">
      <li className="todo">
        todo list
        <button className="edit">edit</button>
        <div>
          <button className="delete">delete</button>
        </div>
      </li>
    </ul>
  );
};

export default TodoList;
