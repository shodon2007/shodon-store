import { Link } from "react-router-dom";
import classes from "./Header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { logout } from "../../store/slice/userSlice";

const Header = () => {
    const token = useSelector((state: RootState) => state.user.token);
    const dispatch = useDispatch();

    return (
        <header className={classes.header}>
            <div className={classes.body}>
                <Link to={"/"}>shodon store</Link>
                <div className="nav">
                    {token ? (
                        <a onClick={() => dispatch(logout())}>Выйти</a>
                    ) : (
                        <Link to={"/auth"}>войти</Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
