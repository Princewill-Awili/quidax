import React, {createContext, useState } from "react";

import { books } from './dummyData'


export const states = createContext();

export const StateContextProvider = ({children}) => {

    const [cartOpen, setCartOpen] = useState(false);
    const [cart, setCart] = useState([]);

    const [subTotal, setSubTotal] = useState(0);

    return (
        <states.Provider value={{books, cartOpen, setCartOpen, cart, setCart,subTotal, setSubTotal }}>
            {children}
        </states.Provider>
    )
}
