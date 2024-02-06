import { FC, InputHTMLAttributes } from "react";
import classNames from "/shared/lib/classNames";
import cls from "./Input.module.scss";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}
const Input: FC<InputProps> = ({ className, ...props }) => {
    return (
        <input {...props} className={classNames(cls.Input, {}, [className])} />
    );
};
export default Input;