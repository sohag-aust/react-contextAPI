import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const toogleAuth = () => {
        setIsAuthenticated(prev => !prev);
    };

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            toogleAuth
        }}>

            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;