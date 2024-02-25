import { FC } from "react";
import classNames from "src/shared/lib/classNames";
import cls from "./Filter.module.scss";
interface FilterProps { className?: string; }
const Filter: FC<FilterProps> = () => {
    return (
        <div className={classNames(cls.Filter, {}, [])}>

        </div>
    );
};
export default Filter;