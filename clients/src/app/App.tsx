import React from 'react';
import useTheme from "/app/theme/useTheme";
import AppRouter from "/app/providers/routes/ui/AppRouter";
import { Navbar } from "/widgets/Navbar";
import classNames from "/shared/lib/classNames";
import { createPortal } from 'react-dom';


const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <div className="body">
                <Navbar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;
