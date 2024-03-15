import { Dispatch, FC, SetStateAction, memo, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Dropdown from 'src/shared/ui/Dropdown/Dropdown';
import sortValues from '../model/sortValues';
import { FilterType } from 'src/app/types/filter';

interface SortProps {
	setFilter: Dispatch<SetStateAction<FilterType>>;
}

const Sort: FC<SortProps> = memo(({ setFilter }) => {
	const [dropdownValue, setDropdownValue] = useState('date');

	setFilter(element => {
		const copyElement = { ...element };

		copyElement.sort = [dropdownValue];

		return copyElement;
	});

	return (
		<div>
			<h1>{dropdownValue}</h1>
			<Dropdown
				setValue={setDropdownValue}
				value={dropdownValue}
				values={sortValues}
			/>
		</div>
	);
});

export default Sort;
