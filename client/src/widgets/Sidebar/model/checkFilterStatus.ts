import { FilterType } from 'src/app/types/filter';

export default function checkFilterStatus(
	filters: FilterType,
	title: string,
	description: string,
): boolean {
	return !!filters[title] && filters[title].includes(description);
}
