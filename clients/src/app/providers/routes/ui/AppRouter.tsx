import React from 'react';
import {Suspense} from 'react'
import {createBrowserRouter, Link, RouterProvider, Route, Routes} from "react-router-dom";
import {routeConfig} from "/shared/config/routeConfig/routeConfig";


const AppRouter = () => {
    return (
        <Suspense fallback={<div>загрузка😡😡😡</div>}>
            <Routes>
               {Object.values(routeConfig).map(elem => {
                   return <Route element={elem.element} path={elem.path} key={elem.path} />
               })}
           </Routes>
        </Suspense>
    );
};

export default AppRouter;
