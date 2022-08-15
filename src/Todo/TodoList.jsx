import React from "react";
import { useContext } from "react";
import { Context } from "../Context";

const TodoList = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <ul className="todo-list">
      {state.map((todo) => (
        <li className="todo" key={todo.id}>
          <span>{todo.title}</span>
          <button className="edit">edit</button>
          <div>
            <button className="delete">delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
