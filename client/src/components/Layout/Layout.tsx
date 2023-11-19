import { Outlet } from "react-router";
import Header from "../Header/Header";

import classes from "./Layout.module.scss";

const Layout = () => {
    return (
        <div className={classes.layout}>
            <Header />
            <div className={classes.app}>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
