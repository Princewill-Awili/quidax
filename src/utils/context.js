import React, {createContext, useState } from "react";

import { books } from './dummyData'


export const states = createContext();

export const StateContextProvider = ({children}) => {

    

    return (
        <states.Provider value={{books}}>
            {children}
        </states.Provider>
    )
}
