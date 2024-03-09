import { ButtonHTMLAttributes, FC } from 'react';

import classNames from 'src/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum buttonTheme {
  SMALLEST = 'smallest',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: buttonTheme;
}

const Button: FC<ButtonProps> = ({ children, className, theme, ...props }) => {
  return (
    <button
      {...props}
      className={classNames(cls.Button, { [cls[theme]]: !!theme }, [className])}
    >
      {children}
    </button>
  );
};

export default Button;
