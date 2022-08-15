import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../Context";

const TodoList = () => {
  const { title, setTitle, state, addTitle } = useContext(Context);

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
          onClick={() => (title.length > 3 ? addTitle() : false)}
        >
          add
        </button>
      </div>
    </div>
  );
};

export default TodoList;
