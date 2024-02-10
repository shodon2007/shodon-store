import { FC, ReactNode } from "react";

import classNames from "/shared/lib/classNames";
import cls from "./Title.module.scss";

interface TitleProps {
    className?: string;
    children: ReactNode
}
const Title: FC<TitleProps> = ({ className, children }) => {
    return (
        <span className={classNames(cls.Title, {}, [className])}>
            {children}
        </span>
    );
};
export default Title;