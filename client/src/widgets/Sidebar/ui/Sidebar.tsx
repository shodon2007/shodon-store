import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import { FilterType } from 'src/shared/api/filterApi';
import { Attribute } from 'src/shared/api/productApi';
import classNames from 'src/shared/lib/classNames/classNames';
import { useGetFilter } from 'src/shared/lib/useGetFilter/useGetFilter';

import toggleAttribute from '../../../features/toggleFilterButton/model/toggleAttribute';

import cls from './Sidebar.module.scss';
import checkFilterStatus from '../model/checkFilterStatus';
import ToggleFilterButton from 'src/features/toggleFilterButton/ui/toggleFilterButton';

interface FilterProps {
	className?: string;
	filters: FilterType;
	setFilters: Dispatch<SetStateAction<FilterType>>;
}

const Sidebar: FC<FilterProps> = ({ filters, setFilters }) => {
	const [, setSearchParams] = useSearchParams();
	const { type } = useParams();

	const { data: attributes, isLoading } = useGetFilter(type);

	useEffect(() => {
		setSearchParams(filters);
	}, [filters]);

	if (isLoading) {
		return <div>Загрузка фильтров...</div>;
	}

	function toggleAttributeHandler(attribute: Attribute, checked: boolean) {
		setFilters(prev => toggleAttribute(prev, attribute, checked));
	}

	return (
		<div className={classNames(cls.Sidebar, {}, [])}>
			{Object.entries(attributes).map(([title, descriptions], index) => {
				return (
					<div key={index}>
						<span>{title}</span>
						<div className={cls.attributes}>
							{descriptions.map((description, index) => {
								const checked = checkFilterStatus(filters, title, description);

								return (
									<ToggleFilterButton
										checked={checked}
										description={description}
										title={title}
										toggleAttributeHandler={toggleAttributeHandler}
										key={index}
									/>
								);
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
};
export default Sidebar;
