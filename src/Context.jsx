import React from "react";
import { createContext } from "react";
import { useReducer, useState } from "react";

export const Context = createContext(null);

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD-TODO":
      return [...state, addTodo(payload.title)];
    case "DELETE-TODO":
      return state.filter((todo) => todo.id !== payload.id);
  }
};

const addTodo = (name) => {
  return { id: Date.now(), title: name };
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState("");

  const addTitle = () => {
    dispatch({ type: "ADD-TODO", payload: { title: title } });
    setTitle("");
  };



  const data = {
    state,
    dispatch,
    title,
    setTitle,
    addTitle,
  };
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default Provider;
