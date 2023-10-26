import React, { useContext, createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [theme, setTheme] = useState(()=>{
        const storedData = localStorage.getItem('theme');
        return storedData ? (storedData) : '';
    });

    useEffect(() => {
        setTheme(isSwitchOn ? "light" : "dark");
        localStorage.setItem('theme', theme)
    }, [isSwitchOn, theme]);

    const toggleSwitch = () => {
        setIsSwitchOn(!isSwitchOn);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleSwitch }}>
            {children}
        </ThemeContext.Provider>
    );
}