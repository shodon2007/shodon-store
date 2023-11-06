import { FC, memo } from "react";
import classes from "./MyButton.module.scss";

const MyButton: FC<any> = memo(({ children, active, ...props }) => {
    const btnClasses = [classes.btn];
    if (active) {
        btnClasses.push(classes.active);
    }
    return (
        <button className={btnClasses.join(" ")} {...props}>
            {children}
        </button>
    );
});

export default MyButton;
