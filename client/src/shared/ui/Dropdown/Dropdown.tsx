import { Dispatch, FC, SetStateAction, memo, useEffect, useMemo } from 'react';
import { DropdownElement } from 'src/app/types/dropdown';

interface DropdownProps {
	values: DropdownElement[];
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
}

const Dropdown: FC<DropdownProps> = memo(({ values, value, setValue }) => {
	return (
		<div>
			<select
				name='dropdown'
				value={value}
				onChange={e => setValue(e.target.value)}
			>
				{values.map(({ value: itemValue, title }) => {
					return <option value={itemValue}>{title}</option>;
				})}
			</select>
		</div>
	);
});

export default Dropdown;
