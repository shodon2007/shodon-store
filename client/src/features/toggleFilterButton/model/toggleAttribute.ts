import { FilterType } from 'src/app/types/filter';
import { Attribute } from 'src/app/types/product';

type toggleAttributeFn = (
	filters: FilterType,
	attribute: Attribute,
	checked: boolean,
) => FilterType;

const toggleAttribute: toggleAttributeFn = (filters, attribute, checked) => {
	const { title, description } = attribute;

	if (checked) {
		return deleteAttribute(filters, title, description);
	} else {
		return addNewAttribute(filters, title, description);
	}
};

function addNewAttribute(
	filters: FilterType,
	key: string,
	newValue: string,
): FilterType {
	const newFilter = { ...filters };

	if (newFilter[key]) {
		newFilter[key].push(newValue);
	} else {
		newFilter[key] = [newValue];
	}

	return newFilter;
}

function deleteAttribute(
	filters: FilterType,
	key: string,
	deleteItem: string,
): FilterType {
	const copyFilter = { ...filters };
	if (copyFilter[key]) {
		copyFilter[key] = copyFilter[key].filter(el => el !== deleteItem);
	} else {
		copyFilter[key] = [];
	}

	return copyFilter;
}
export default toggleAttribute;
