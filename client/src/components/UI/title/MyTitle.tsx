import { FC } from "react";
import classes from "./MyTitle.module.scss";

const MyTitle: FC<any> = ({ children, ...props }) => {
    return (
        <div className={classes.title} {...props}>
            {children}
        </div>
    );
};

export default MyTitle;
