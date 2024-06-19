import { FC, useEffect, useState } from 'react';
import Dropdown from 'src/shared/ui/Dropdown/Dropdown';
import sortValues from '../model/sortValues';
import { SortValues } from 'src/app/types/filter';
import { memo } from 'src/app/types/memo';
import cls from './Sort.module.scss';
import {
	useAppDispatch,
	useAppSelector,
} from 'src/shared/lib/state/stateHooks';
import { updateFilter } from 'src/entities/Filter';

const Sort: FC = memo(() => {
	const filters = useAppSelector(state => state.filter.values);
	const [dropdownValue, setDropdownValue] = useState<SortValues>(
		filters.sort?.[0] ?? SortValues.NAME,
	);
	const dispatch = useAppDispatch();

	useEffect(() => {
		updateFilter();
		if (filters.sort[0] !== dropdownValue) {
			const copyFilters = structuredClone(filters);
			copyFilters.sort = [dropdownValue];
			dispatch(updateFilter(copyFilters));
		}
	}, [dropdownValue]);
	return (
		<>
			<h1 className={cls.title}>Сортировка</h1>
			<Dropdown
				setValue={setDropdownValue}
				value={dropdownValue}
				values={sortValues}
			/>
		</>
	);
});

export default Sort;
