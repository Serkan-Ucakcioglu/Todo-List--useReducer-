import React from 'react';
import { createContext } from 'react';

export const Context = createContext(null)

const Provider = ({children}) => {
    
    return(
      <Context.Provider>
        {children}
      </Context.Provider>
    )
}


export default Provider;