import React from "react";
import { useContext } from "react";
import { Context } from "../Context";
import TodoEdit from "./TodoEdit";

const TodoList = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <ul className="todo-list">
      {state?.map((todo) => (
        <li className="todo">
          <TodoEdit key={todo.id} todo={todo} />
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
