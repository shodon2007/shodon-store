import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import LightSvg from './lightmode.svg';
import DarkSvg from './darkmode.svg';

import cls from './ThemeButton.module.scss';
import UseTheme from '../model/useTheme';
import { Theme } from 'src/app/theme/ThemeContext';
import Button from 'src/shared/ui/Button/Button';
import classNames from 'src/shared/lib/classNames/classNames';

interface ThemeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
}

const ThemeButton: FC<ThemeButtonProps> = ({ className, ...props }) => {
	const { theme, toggleTheme } = UseTheme();

	const themeSvg: Record<Theme, ReactNode> = {
		[Theme.DARK]: <DarkSvg className={cls.svg} />,
		[Theme.NORMAL]: <LightSvg className={cls.svg} />,
	};

	return (
		<Button
			className={classNames(cls.themeButton, {}, [className])}
			onClick={toggleTheme}
			{...props}
		>
			{themeSvg[theme]}
		</Button>
	);
};
export default ThemeButton;
