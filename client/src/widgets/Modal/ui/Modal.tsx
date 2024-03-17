import {
	Context,
	FC,
	MouseEvent,
	ReactNode,
	createContext,
	useEffect,
} from 'react';
import classNames from 'src/shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { createPortal } from 'react-dom';
import { useTheme } from 'src/features/toggleTheme';
import { ModalContextInterface } from 'src/app/types/modal';
import Button from 'src/shared/ui/Button/Button';

interface ModalProps {
	className?: string;
	children: ReactNode;
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext: Context<ModalContextInterface> = createContext({});

const rootModal = document.getElementById('modal');

const Modal: FC<ModalProps> = ({ children, open, setOpen }) => {
	const { theme } = useTheme();
	const modalElement = document.createElement('div');

	function closeModal() {
		setOpen(false);
	}

	useEffect(() => {
		rootModal.appendChild(modalElement);
		return () => {
			rootModal.removeChild(modalElement);
		};
	}, [modalElement]);

	const mods = {
		[cls.isOpen]: open,
	};

	function contentClick(e: MouseEvent<HTMLDivElement>) {
		e.stopPropagation();
	}

	return (
		<>
			{createPortal(
				<div className={classNames(cls.Modal, mods, [theme])}>
					<div className={cls.overview} onClick={closeModal}>
						<div className={cls.content} onClick={e => contentClick(e)}>
							<div className={cls.header}>
								<Button className={cls.close} onClick={closeModal}>
									x
								</Button>
							</div>
							<ModalContext.Provider value={{ closeModal: closeModal }}>
								{children}
							</ModalContext.Provider>
						</div>
					</div>
				</div>,
				rootModal,
			)}
		</>
	);
};
export default Modal;
