import React, {useState, createContext} from 'react';

export const ThemeContext = createContext();

export const DarkModeClass = (isDark) => isDark ? 'darkMode' : '';

const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(true);

    const toggleMode = () => {
        setIsDark(!isDark);
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
