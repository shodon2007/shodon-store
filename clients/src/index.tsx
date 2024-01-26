import {createRoot} from 'react-dom/client';
import App from "/app/App";
import AppRouter from "/app/providers/routes/ui/AppRouter";
import {BrowserRouter} from "react-router-dom";
import './app/styles/index.scss'
const root = createRoot(document.getElementById('root'));

root.render(<div className={'app dark'}>
    <BrowserRouter>
        <AppRouter  />
    </BrowserRouter>
</div>);
