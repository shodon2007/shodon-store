import { FilterType } from 'src/app/types/filter';

function getAllFilterSettings(searchParams: URLSearchParams): FilterType {
	const res: FilterType = {};
	searchParams.forEach((value, key) => {
		if (res[key]) {
			res[key].push(value);
		} else {
			res[key] = [value];
		}
	});
	return res;
}

export { getAllFilterSettings };
