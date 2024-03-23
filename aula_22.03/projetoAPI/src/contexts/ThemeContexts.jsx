import React from 'react'
import { createContext, useState } from "react"

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState({
        background: 'White',
        text: 'black',
    });


    const toggleTheme = () => {
        setTheme((prevTheme) =>
            prevTheme.background === 'white'
                ? { background: 'black', text: 'white' }
                : { background: 'white', text: 'black' }
        );
    };

    return (
        <>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
            </ThemeContext.Provider>
        </>
    )
}

export { ThemeProvider, ThemeContext }