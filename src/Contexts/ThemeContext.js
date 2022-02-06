import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [isLightTheme, setIsLightTheme] = useState(true);
    const [lightTheme, setLightTheme] = useState({
        syntax: '#555',
        ui: '#ddd',
        bg: '#eee'
    });

    const [darkTheme, setDarkTheme] = useState({
        syntax: '#ddd',
        ui: '#333',
        bg: '#555'
    });

    const toogleTheme = () => {
        setIsLightTheme(prev => !prev);
    };

    return (
        <ThemeContext.Provider value={{
            isLightTheme, setIsLightTheme,
            lightTheme, setLightTheme,
            darkTheme, setDarkTheme,
            toogleTheme
        }}>

            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;