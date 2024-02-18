import { FC } from "react";

import classNames from "/shared/lib/classNames";

import cls from "./Tab.module.scss";
import Button from "../Button/Button";

interface TabProps {
    tabs: string[];
    tab: string;
    changeTab: React.Dispatch<React.SetStateAction<string>>;
}

const Tab: FC<TabProps> = (props) => {
    const { tabs, tab, changeTab } = props;

    function setTab(newValue: string) {
        changeTab(newValue);
    }

    return (
        <div className={cls.tab}>
            {tabs.map((elem) => {
                return (
                    <Button
                        className={classNames(cls.btn, {
                            [cls.selected]: tab === elem,
                        })}
                        key={elem}
                        onClick={() => setTab(elem)}
                    >
                        {elem}
                    </Button>
                );
            })}
        </div>
    );
};

export default Tab;
