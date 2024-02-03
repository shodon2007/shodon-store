import React, { FC } from 'react';
import { Link } from "react-router-dom";

import cls from './Navbar.module.scss';
import classNames from '/shared/lib/classNames';
import BasketSvg from './basket.svg';

interface NavbarProps {
    className?: string
}

const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Link to={'/'}>shodon store</Link>
            <nav>
                <Link to={'/basket'}><BasketSvg /></Link>
                <Link to={'/account'}>Аккаунт</Link>
            </nav>
        </div>
    );
};

export default Navbar;
