import { Link } from "react-router-dom";
import { ButtonHTMLAttributes, FC } from "react";

import classNames from "/shared/lib/classNames";

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