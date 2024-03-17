import { FilterType } from 'src/app/types/filter';

function getFilterParams(filters: FilterType): [string, string][] {
	return [['Оперативная память', '8gb']];
}

export default getFilterParams;
