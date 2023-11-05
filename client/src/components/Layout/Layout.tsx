import { Outlet } from "react-router";
import Header from "../Header/Header";

import classes from "./Layout.module.scss";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const Layout = () => {
    return (
        <div className={classes.layout}>
            <Header />
            <Breadcrumbs />
            <div className={classes.app}>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
