import { Context, FC, MouseEvent, ReactNode, createContext } from "react";
import classNames from "src/shared/lib/classNames";
import cls from "./Modal.module.scss";
import { createPortal } from "react-dom";
import {useTheme} from "src/features/toggleTheme";

interface ModalProps {
    className?: string;
    children: ReactNode;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ModalContextInterface {
    closeModal?: () => void;
}

export const ModalContext: Context<ModalContextInterface> = createContext({});

const Modal: FC<ModalProps> = ({ children, open, setOpen }) => {
    const { theme } = useTheme();

    function closeModal() {
        setOpen(false);
    }

    const mods = {
        [cls.isOpen]: open,
    }

    function contentClick(e: MouseEvent<HTMLDivElement>) {
        e.stopPropagation();
    }

    return createPortal(
        <div className={classNames(cls.Modal, mods, [theme])}>
            <div className={cls.overview} onClick={closeModal}>
                <div className={cls.content} onClick={e => contentClick(e)}>
                    <ModalContext.Provider value={{ closeModal: closeModal }}>
                        {children}
                    </ModalContext.Provider>
                </div>
            </div>
        </div>,
        document.getElementById('modal'));
};
export default Modal;