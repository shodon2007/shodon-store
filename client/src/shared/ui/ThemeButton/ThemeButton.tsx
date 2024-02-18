import { FC } from "react";

import LightSvg from './lightmode.svg';
import DarkSvg from './darkmode.svg';

import cls from "./ThemeButton.module.scss";
import UseTheme from "/app/theme/useTheme";
import { Theme } from "/app/theme/ThemeContext";

interface ThemeButtonProps {
    className?: string;
}

const ThemeButton: FC<ThemeButtonProps> = () => {
    const { theme, toggleTheme } = UseTheme();

    const themeSvg = {
        [Theme.DARK]: <DarkSvg className={cls.svg} />,
        [Theme.NORMAL]: <LightSvg className={cls.svg} />
    }

    return (
        <button className={cls.themeButton} onClick={toggleTheme}>
            {themeSvg[theme]}
        </button>
    );
};
export default ThemeButton;