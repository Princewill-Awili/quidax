import React, {createContext, useState } from "react";

import { books } from './dummyData'


export const states = createContext();

export const StateContextProvider = ({children}) => {

    const [cartOpen, setCartOpen] = useState(false);

    return (
        <states.Provider value={{books, cartOpen, setCartOpen}}>
            {children}
        </states.Provider>
    )
}
