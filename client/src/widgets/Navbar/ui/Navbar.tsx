import { FC, memo, useState } from 'react';
import { Link } from "react-router-dom";

import classNames from 'src/shared/lib/classNames';
import { Modal } from 'src/widgets/Modal';
import Auth from 'src/pages/Auth/Auth';
import { ThemeButton } from 'src/features/toggleTheme';

import cls from './Navbar.module.scss';

import BasketSvg from './svg/basket.svg';
import ProfileSvg from './svg/profile.svg';
import LogoutSvg from './svg/logout.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, logout } from 'src/app/providers/redux';

interface NavbarProps {
    className?: string
}

const Navbar: FC<NavbarProps> = memo(({ className }) => {
    const userSlice = useSelector((state: RootState) => state.userSlice);
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Link to={'/'} className={cls.title}>shodon store</Link>
            <nav className={cls.nav}>
                {userSlice.token
                    ? (
                        <>
                            <ThemeButton />
                            <Link to={'/basket'} className={cls.link}>
                                <BasketSvg className={cls.svg} />
                            </Link>
                            <LogoutSvg className={cls.svg} onClick={() => dispatch(logout())} />
                        </>
                    )
                    : (
                        <>
                            <div></div>
                            <ThemeButton />
                            <ProfileSvg className={cls.svg} onClick={() => setModal(true)} />
                        </>
                    )
                }
            </nav>
            <Modal open={modal} setOpen={setModal}>
                <Auth />
            </Modal>
        </div>

    );
})

export default Navbar;
