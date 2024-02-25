import { FC } from "react";

import LightSvg from './lightmode.svg';
import DarkSvg from './darkmode.svg';

import cls from "./ThemeButton.module.scss";
import UseTheme from "src/app/theme/useTheme";
import { Theme } from "src/app/theme/ThemeContext";
import Button from "src/shared/ui/Button/Button";

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
        <Button className={cls.themeButton} onClick={toggleTheme}>
            {themeSvg[theme]}
        </Button>
    );
};
export default ThemeButton;