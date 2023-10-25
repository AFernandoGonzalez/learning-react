import React, { useContext, createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        setTheme(isSwitchOn ? "light" : "dark");
    }, [isSwitchOn]);

    const toggleSwitch = () => {
        setIsSwitchOn(!isSwitchOn);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleSwitch }}>
            {children}
        </ThemeContext.Provider>
    );
}