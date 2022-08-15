import React from "react";
import { useContext, useState } from "react";
import { Context } from "../Context";

const TodoList = () => {
  const { state, dispatch } = useContext(Context);

  let [isEditing, setIsEditing] = useState(false);

  return (
    <ul className="todo-list">
      {state.map((todo) => (
        <li className="todo" key={todo.id}>
          <span>{todo.title}</span>
          <button
            className="edit"
            onClick={() => setIsEditing((isEditing = !isEditing))}
          >
            {isEditing ? "save" : "edit"}
          </button>
          <div>
            <button
              className="delete"
              onClick={() =>
                dispatch({ type: "DELETE-TODO", payload: { id: todo.id } })
              }
            >
              delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
