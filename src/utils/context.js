import React, {createContext, useState } from "react";

import { books } from './dummyData'


export const states = createContext();

export const StateContextProvider = ({children}) => {

    const [cartOpen, setCartOpen] = useState(false);
    const [cart, setCart] = useState([]);
    const [searchMode, setSearchMode] = useState(false);
    const [mobileSearch, setMobileSearch] = useState(false);
    const [query,setQuery] = useState("");
    const [foundBooks, setFoundBooks] = useState([]);

    const [subTotal, setSubTotal] = useState(0);

    return (
        <states.Provider 
            value={{
                books,
                cartOpen, setCartOpen, 
                cart, setCart,
                subTotal, setSubTotal, 
                searchMode, setSearchMode, 
                mobileSearch, setMobileSearch,
                query, setQuery,
                foundBooks, setFoundBooks 
                }}
        >
            {children}
        </states.Provider>
    )
}
