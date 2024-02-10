import { ReactNode, useState } from "react";
import cls from "./Auth.module.scss";
import Tab from "../../shared/ui/Tab/Tab";
import Login from "./Login";
import Registration from "./Registration";

const Auth = () => {
    const [tabValue, setTabValue] = useState('войти');

    const tabComponents: Record<string, ReactNode> = {
        войти: <Login />,
        зарегестрироваться: <Registration />
    }

    return (
        <div className={cls.auth}>
            <Tab tabs={Object.keys(tabComponents)} tab={tabValue} changeTab={setTabValue} />
            {tabComponents[tabValue]}
        </div>
    );
};

export default Auth;
