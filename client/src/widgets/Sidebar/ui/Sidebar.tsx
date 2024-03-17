import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import classNames from 'src/shared/lib/classNames/classNames';
import { useGetFilter } from 'src/shared/lib/useGetFilter/useGetFilter';

import toggleAttribute from 'src/features/toggleFilterButton/model/toggleAttribute';

import cls from './Sidebar.module.scss';
import checkFilterStatus from '../model/checkFilterStatus';
import ToggleFilterButton from 'src/features/toggleFilterButton/ui/toggleFilterButton';
import { FilterType } from 'src/app/types/filter';
import { Attribute } from 'src/app/types/product';
import { Sort } from 'src/entities/Filter/Sort';
import Button from 'src/shared/ui/Button/Button';
import FilterSvg from './filterButton.svg';
import { Modal } from 'src/widgets/Modal';
import AttributesFilter from './Attributes';

interface FilterProps {
	className?: string;
	filters: FilterType;
	setFilters: Dispatch<SetStateAction<FilterType>>;
}

const Sidebar: FC<FilterProps> = ({ filters, setFilters }) => {
	const [, setSearchParams] = useSearchParams();
	const [modal, setModal] = useState(false);

	useEffect(() => {
		setSearchParams(filters);
	}, [filters]);

	return (
		<div className={classNames(cls.Sidebar, {}, [])} data-testid='sidebar'>
			<Sort filter={filters} setFilter={setFilters} />
			<Button className={cls.attributesBtn} onClick={() => setModal(true)}>
				<FilterSvg />
			</Button>
			<Modal open={modal} setOpen={setModal}>
				<AttributesFilter filters={filters} setFilters={setFilters} />
			</Modal>
			<AttributesFilter
				filters={filters}
				setFilters={setFilters}
				className={cls.attributesDesctop}
			/>
		</div>
	);
};
export default Sidebar;
