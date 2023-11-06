import { FC, memo } from "react";
import classes from "./MyTitle.module.scss";

const MyTitle: FC<any> = memo(({ children, ...props }) => {
    return (
        <div className={classes.title} {...props}>
            {children}
        </div>
    );
});

export default MyTitle;
