import React, {useContext, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "/app/theme/ThemeContext";


interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

const UseTheme = (): UseThemeResult => {
    const {theme, setTheme} = useContext(ThemeContext);
    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.NORMAL : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }



    return {
        theme, toggleTheme
    }
};

export default UseTheme;
