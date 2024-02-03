import React, {FC} from 'react';
import {Link} from "react-router-dom";

import cls from './Navbar.module.scss';
import classNames from '/shared/lib/classNames';

interface NavbarProps {
    className?: string
}

const Navbar: FC<NavbarProps> = ({className}) => {
    return (
        <div className={classNames(cls.Navbar,{}, [className])}>
            <div>
                <Link to={'/'}>shodon store</Link>
            </div>
            <div>
                <Link to={'/basket'}>Корзина</Link>
                <Link to={'/account'}>Аккаунт</Link>
            </div>
        </div>
    );
};

export default Navbar;
