export type TProduct = {
    brand_id: number;
    id: number;
    img: string;
    name: string;
    price: number;
    type_id: number;
    attributes: TAttributes[];
}

type TAttributes = {
    id: number,
    title: string,
    description: string,
}