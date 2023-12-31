export type TProduct = {
    brand_id: number;
    id: number;
    img: string;
    name: string;
    price: number;
    type_id: number;
    attributes: TAttribute[];
    rate: string;
    reviews: number;
}

export type TAttributes = {
    attributes: TAttribute[];
    reviews: number;
}

export type TAttribute = {
    id: number,
    title: string,
    description: string,
}

export type TFilter = {
    type: string,
    filter: any
}