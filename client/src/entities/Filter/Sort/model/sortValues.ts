import { SortType, SortValues } from 'src/app/types/filter';

const sortValues: SortType[] = [
	{
		title: 'Сначала новые',
		value: SortValues.DATEDESC,
	},
	{
		title: 'Сначала старые',
		value: SortValues.DATEASC,
	},
	{
		title: 'По убыванию цены',
		value: SortValues.PRICEDESC,
	},
	{
		title: 'По возрастанию цены',
		value: SortValues.PRICEASC,
	},
	{
		title: 'По названию',
		value: SortValues.NAME,
	},
];

export default sortValues;
