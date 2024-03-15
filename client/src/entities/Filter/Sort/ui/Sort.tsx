import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import Dropdown from 'src/shared/ui/Dropdown/Dropdown';
import sortValues from '../model/sortValues';
import { FilterType, SortValues } from 'src/app/types/filter';
import { memo } from 'src/app/types/memo';

interface SortProps {
	setFilter: Dispatch<SetStateAction<FilterType>>;
	filter: FilterType;
}

const Sort: FC<SortProps> = memo(({ filter, setFilter }) => {
	const [dropdownValue, setDropdownValue] = useState<SortValues>(
		filter.sort?.[0] ?? SortValues.NAME,
	);

	useEffect(() => {
		setFilter(element => {
			const copyElement = { ...element };

			copyElement.sort = [dropdownValue];

			return copyElement;
		});
	}, [dropdownValue]);
	return (
		<div>
			<h1>Сортировка</h1>
			<Dropdown
				setValue={setDropdownValue}
				value={dropdownValue}
				values={sortValues}
			/>
		</div>
	);
});

export default Sort;
