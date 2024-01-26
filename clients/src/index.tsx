import {createRoot} from 'react-dom/client';
import App from "/app/App";
import AppRouter from "/app/providers/routes/ui/AppRouter";
import {BrowserRouter} from "react-router-dom";
import './app/styles/index.scss'
import ThemeProvider from "/app/theme/ThemeProvider";
const root = createRoot(document.getElementById('root'));

root.render(<div className={'app dark'}>
    <BrowserRouter>
        <ThemeProvider>
            <App  />
        </ThemeProvider>
    </BrowserRouter>
</div>);
