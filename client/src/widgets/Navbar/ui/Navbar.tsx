import { FC, useState } from 'react';
import { Link } from "react-router-dom";

import classNames from '/shared/lib/classNames';
import { Modal } from '/widgets/Modal';
import Auth from '/pages/Auth/Auth';
import ThemeButton from '/shared/ui/ThemeButton/ThemeButton';

import cls from './Navbar.module.scss';

import BasketSvg from './svg/basket.svg';
import ProfileSvg from './svg/profile.svg';
import LogoutSvg from './svg/logout.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, logout } from '/app/providers/redux';

interface NavbarProps {
    className?: string
}

const Navbar: FC<NavbarProps> = ({ className }) => {
    const userSlice = useSelector((state: RootState) => state.userSlice);
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Link to={'/'} className={cls.title}>shodon store</Link>
            <nav className={cls.nav}>
                <ThemeButton />
                <Link to={'/basket'} className={cls.link}>
                    <BasketSvg className={cls.svg} />
                </Link>
                {userSlice.token
                    ? <LogoutSvg className={cls.svg} onClick={() => dispatch(logout())} />
                    : <ProfileSvg className={cls.svg} onClick={() => setModal(true)} />
                }

            </nav>
            <Modal open={modal} setOpen={setModal}>
                <Auth />
            </Modal>
        </div>

    );
};

export default Navbar;
