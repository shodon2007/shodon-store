export const enum SortValues {
	DATEDESC = 'datedesc',
	DATEASC = 'dateasc',
	PRICEDESC = 'pricedesc',
	PRICEASC = 'priceasc',
	NAME = 'name',
}

export type FilterType = {
	[key: string]: string[];
	sort?: [SortValues];
};

export interface SortType {
	title: string;
	value: SortValues;
}
