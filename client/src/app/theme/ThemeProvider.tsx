import React, { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

export const defaultTheme =
	(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.NORMAL;

interface Props {
	children: React.ReactNode;
}

const ThemeProvider: FC<Props> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme);
	const defaultProps = useMemo(() => {
		return { theme: theme, setTheme: setTheme };
	}, [theme]);

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
