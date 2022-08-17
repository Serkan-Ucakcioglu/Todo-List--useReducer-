import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../Context";

export default function TodoEdit({ todo }) {
  let [isEditing, setIsEditing] = useState(false);
  const { dispatch } = useContext(Context);
  const [titles, setTitles] = useState(todo.title);
  let todoContent;

  if (isEditing) {
    todoContent = (
      <div>
        <input
          type="text"
          value={titles}
          disabled={!isEditing}
          onChange={(e) => {
            setTitles(e.target.value);
            console.log(e.target.value);
          }}
        />
        <button
          className="edit"
          onClick={() => {
            dispatch({
              type: "edit-todo",
              payload: {
                id: todo.id,
                title: titles,
              },
            }),
              setIsEditing(!isEditing);
          }}
        >
          save
        </button>
      </div>
    );
  } else {
    todoContent = (
      <div>
        <span>{todo.title}</span>
        <button className="edit" onClick={() => setIsEditing(!isEditing)}>
          edit
        </button>
      </div>
    );
  }
  return <div>{todoContent}</div>;
}
