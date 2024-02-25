import { ButtonHTMLAttributes, FC } from "react";

import classNames from "src/shared/lib/classNames";

import cls from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
    return (
        <button {...props} className={classNames(cls.Button, {}, [className])}>
            {children}
        </button>
    );
};
export default Button;