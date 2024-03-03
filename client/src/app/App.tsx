import {useTheme} from "src/features/toggleTheme";
import AppRouter from "src/app/providers/routes/ui/AppRouter";
import { Navbar } from "src/widgets/Navbar";
import classNames from "src/shared/lib/classNames";

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <div className='body'>
                <Navbar />
                <div className="content">
                    <AppRouter />
                </div>
            </div>
        </div>
    );
};

export default App;
