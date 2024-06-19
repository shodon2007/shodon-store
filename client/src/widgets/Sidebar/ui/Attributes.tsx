import { FC } from 'react';
import { useParams } from 'react-router-dom';
import ToggleFilterButton from 'src/features/toggleFilterButton/ui/toggleFilterButton';
import { useGetFilter } from 'src/shared/lib/useGetFilter/useGetFilter';
import cls from './Sidebar.module.scss';
import toggleAttribute from 'src/features/toggleFilterButton/model/toggleAttribute';
import { Attribute } from 'src/app/types/product';
import checkFilterStatus from '../model/checkFilterStatus';
import classNames from 'src/shared/lib/classNames/classNames';
import {
	useAppDispatch,
	useAppSelector,
} from 'src/shared/lib/state/stateHooks';
import { updateFilter } from 'src/entities/Filter';

interface AttributesFilterProps {
	className?: string;
}

const AttributesFilter: FC<AttributesFilterProps> = ({ className }) => {
	const { type } = useParams();
	const { data: attributes, isLoading } = useGetFilter(type);
	const filters = useAppSelector(store => store.filter.values);
	const dispatch = useAppDispatch();

	function toggleAttributeHandler(attribute: Attribute, checked: boolean) {
		dispatch(updateFilter(toggleAttribute(filters, attribute, checked)));
	}

	if (isLoading) {
		return <div>Загрузка фильтров...</div>;
	}

	return (
		<div className={classNames(cls.attributeList, {}, [className])}>
			{Object.entries(attributes).map(([title, descriptions], index) => {
				return (
					<div key={index}>
						<span className={cls.attributeTitle}>{title}</span>
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

export default AttributesFilter;
