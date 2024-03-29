export interface Attribute {
	id?: number;
	title: string;
	description: string;
}

export interface CatalogItem {
	name_ru: string;
	img: string;
	id: number;
	name: string;
}

export interface Product extends CatalogItem {
	price: number;
	brand_id: number;
	rate: string;
	reviews: string;
	type_id: number;
	attributes: Attribute[];
}
