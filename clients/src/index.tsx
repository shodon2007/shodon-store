import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import ThemeProvider from "/app/theme/ThemeProvider";
import { ReactQuery } from './app/providers/tanstack-query';

import App from "/app/App";

import './app/styles/index.scss'

const root = createRoot(document.getElementById('root'));

root.render(<div className={'app dark'}>
    <BrowserRouter>
        <ThemeProvider>
            <ReactQuery>
                <App />
            </ReactQuery>
        </ThemeProvider>
    </BrowserRouter>
</div>);
