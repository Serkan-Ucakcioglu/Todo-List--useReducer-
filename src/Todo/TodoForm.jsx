import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../Context";

const TodoList = () => {
  const { title, setTitle, state, dispatch } = useContext(Context);

  return (
    <div>
      <div className="form">
        <input
          type="text"
          placeholder="Todo..."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={() => {
            dispatch({ type: "ADD-TODO", payload: { title: title } });
            setText("");
          }}
        >
          add
        </button>
      </div>
    </div>
  );
};

export default TodoList;
