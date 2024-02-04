import { FC, MouseEvent, ReactNode, useEffect, useRef } from "react";
import classNames from "/shared/lib/classNames";
import cls from "./Modal.module.scss";
import { createPortal } from "react-dom";

interface ModalProps {
    className?: string;
    children: ReactNode;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: FC<ModalProps> = ({ children, open, setOpen }) => {

    const mods = {
        [cls.isOpen]: open,
    }

    function closeModal() {
        setOpen(false);
    }

    function contentClick(e: MouseEvent<HTMLDivElement>) {
        e.stopPropagation();
    }

    return createPortal(
        <div className={classNames(cls.Modal, mods, [])}>
            <div className={cls.overview} onClick={closeModal}>
                <div className={cls.content} onClick={e => contentClick(e)}>
                    {children}
                </div>
            </div>
        </div>,
        document.getElementById('modal'));
};
export default Modal;