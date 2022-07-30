import React, {useContext} from 'react';
import {ThemeContext} from "../../context/ThemeProvider";

const NightModeSwitcher = () => {
    const { toggleMode, isDark } = useContext(ThemeContext);
    const darkMode = isDark ? "dark" : "";

    return (
        <button className={`Button-btn ${darkMode}`} onClick={toggleMode}>
            {isDark ? "Dark" : "Light "} button
        </button>
    );
};

export default NightModeSwitcher;
