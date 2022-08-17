import React from "react";
import { useContext } from "react";
import { Context } from "../Context";

const TodoList = () => {
  const { title, setTitle, addTitle } = useContext(Context);

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
          onKeyPress={(e ) => {
            if (e.key === "Enter") {
              addTitle()
            }
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
