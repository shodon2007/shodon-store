import React from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "/shared/config/routeConfig/routeConfig";
import {Suspense} from 'react';
import useTheme from "/app/theme/useTheme";
import {classNames} from "/shared/config/lib/classNames";


const App = () => {
    const {theme, toggleTheme} =useTheme()

    return (
        <div className={classNames('app', {a: true, b: false, c: true}, [theme])} onClick={toggleTheme}>
            <Suspense fallback={<div>загрузка😡😡😡</div>}>
                <Routes>
                    {Object.values(routeConfig).map(elem => {
                        return <Route element={elem.element} path={elem.path} key={elem.path} />
                    })}
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
