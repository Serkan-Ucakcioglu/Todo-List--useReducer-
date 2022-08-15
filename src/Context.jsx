import React from 'react';
import { createContext } from 'react';
import { useReducer } from 'react';

export const Context = createContext(null)

const initialState = {
    id: 0,
    title: '',
}

const reducer = (state , {type,payload}) => {
    switch (type) {
        case 'ADD-TODO':
            return [...state , addTodo(payload.title)]
       
    }
}

const addTodo = (name) => {
    return {id: Date.now() , title: name}
}

const Provider = ({children}) => {
 const [state, dispatch] = useReducer(reducer, initialState)

    return(
      <Context.Provider>
        {children}
      </Context.Provider>
    )
}


export default Provider;