import { Link } from "react-router-dom";
import classes from "./Header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { logout } from "../../store/slice/userSlice";
import { memo, useEffect, useState } from "react";

const Header = memo(() => {
    const token = useSelector((state: RootState) => state.user.token);
    const dispatch = useDispatch();
    const [headerView, setHeaderView] = useState(false);
    const [startHeader, setStartHeader] = useState(true);

    useEffect(() => {
        let prew = 0;
        function onScroll() {
            if (window.scrollY < prew) {
                setHeaderView(true);
            } else {
                setHeaderView(false);
            }

            if (prew === 0 || window.scrollY === 0) {
                setStartHeader(true);
            } else {
                setStartHeader(false);
            }
            prew = window.scrollY;
        }

        document.addEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`${classes.header} ${headerView ? classes.show : ""} ${
                startHeader ? classes.start : ""
            }`}
        >
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
