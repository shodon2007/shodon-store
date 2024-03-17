import { Dispatch, FC, SetStateAction } from 'react';
import { DropdownElement } from 'src/app/types/dropdown';

interface DropdownProps {
	values: DropdownElement[];
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
}

const Dropdown: FC<DropdownProps> = ({ values, value, setValue }) => {
	return (
		<select
			name='dropdown'
			value={value}
			onChange={e => setValue(e.target.value)}
		>
			{values.map(({ value: itemValue, title }) => {
				return (
					<option key={itemValue} value={itemValue}>
						{title}
					</option>
				);
			})}
		</select>
	);
};

export default Dropdown;
