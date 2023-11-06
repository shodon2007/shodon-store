import { Link } from "react-router-dom";
import classes from "./Header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { logout } from "../../store/slice/userSlice";
import { memo } from "react";

const Header = memo(() => {
    const token = useSelector((state: RootState) => state.user.token);
    const dispatch = useDispatch();

    return (
        <header className={classes.header}>
            <Link to={"/"}>shodon store</Link>
            <div>
                {token ? (
                    <a onClick={() => dispatch(logout())}>выйти</a>
                ) : (
                    <Link to={"/auth"}>войти</Link>
                )}
            </div>
        </header>
    );
});

export default Header;
