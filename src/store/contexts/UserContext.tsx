import React, { createContext, useState } from 'react';

export const UserContext = createContext({});

const UserContextProvider = (props : any) => {
    const [state] = useState();
    return ( 
        <UserContext.Provider value={{state}}>
            {props.children}
        </UserContext.Provider>
    );

}

export default UserContextProvider;