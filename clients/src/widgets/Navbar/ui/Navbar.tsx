import React, { FC, useRef, useState } from 'react';
import { Link } from "react-router-dom";

import cls from './Navbar.module.scss';
import classNames from '/shared/lib/classNames';
import BasketSvg from './basket.svg';
import Modal from '/shared/ui/Modal/Modal';
import Auth from '/pages/Auth/Auth';

interface NavbarProps {
    className?: string
}

const Navbar: FC<NavbarProps> = ({ className }) => {
    const [modal, setModal] = useState(false);

    function openModal() {
        setModal(true);
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Link to={'/'}>shodon store</Link>
            <nav>
                <Link to={'/basket'}><BasketSvg /></Link>
                <Link onClick={openModal} to={'/account'}>Аккаунт</Link>
            </nav>
            <Modal open={modal} setOpen={setModal}>
                <Auth />
            </Modal>
        </div>
    );
};

export default Navbar;
