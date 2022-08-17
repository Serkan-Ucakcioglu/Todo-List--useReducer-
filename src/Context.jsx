import React from "react";
import { createContext } from "react";
import { useReducer, useState, useEffect } from "react";

export const Context = createContext(null);

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD-TODO":
      return [...state, addTodo(payload.title)];
    case "DELETE-TODO":
      return state.filter((todo) => todo.id !== payload.id);

    case "EDİT-TODO":
      return state.map((t) => {
        if (t.id === payload.id) {
          console.log("newTodo", payload.title);
          return { ...t, title: payload.title };
        } else {
          console.log("t", t);
          return t;
        }
      });
  }
};

const addTodo = (name) => {
  return { id: Date.now(), title: name };
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, [], () => {
    const savedTodos = localStorage.getItem("state");

    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
  });

  const [title, setTitle] = useState("");

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

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
