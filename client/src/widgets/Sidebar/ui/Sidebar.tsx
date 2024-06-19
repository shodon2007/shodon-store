import { FC, memo, useState } from 'react';

import classNames from 'src/shared/lib/classNames/classNames';

import cls from './Sidebar.module.scss';
import { Sort } from 'src/entities/Sort';
import Button from 'src/shared/ui/Button/Button';
import FilterSvg from './filterButton.svg';
import { Modal } from 'src/widgets/Modal';
import AttributesFilter from './Attributes';

interface FilterProps {
	className?: string;
}

const Sidebar: FC<FilterProps> = memo(() => {
	const [modal, setModal] = useState(false);
	return (
		<div className={classNames(cls.Sidebar, {}, [])} data-testid='sidebar'>
			<Sort />
			<Button className={cls.attributesBtn} onClick={() => setModal(true)}>
				<FilterSvg />
			</Button>
			<Modal open={modal} setOpen={setModal}>
				<AttributesFilter />
			</Modal>
			<AttributesFilter className={cls.attributesDesctop} />
		</div>
	);
});
export default Sidebar;
