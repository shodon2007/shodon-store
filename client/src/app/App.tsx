import useTheme from "/app/theme/useTheme";
import AppRouter from "/app/providers/routes/ui/AppRouter";
import { Navbar } from "/widgets/Navbar";
import classNames from "/shared/lib/classNames";

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <div className='body'>
                <Navbar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;
