import React from "react";
import { createContext } from "react";
import { useReducer, useState } from "react";

export const Context = createContext(null);

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD-TODO":
      return [...state, addTodo(payload.title)];
  }
};

const addTodo = (name) => {
  return { id: Date.now(), title: name };
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState("");

  const data = {
    state,
    dispatch,
    title,
    setTitle,
  };
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default Provider;
