import { FilterType } from 'src/app/types/filter';

function getFilterParams(filters: FilterType): [string, string][] {
	console.log(
		Object.entries(filters).map(([key, value]) => {
			return value.map(el => {
				return [key, el];
			});
		}),
	);

	return [['Оперативная память', '8gb']];
}

export default getFilterParams;
