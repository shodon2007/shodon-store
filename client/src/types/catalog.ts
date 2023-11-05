export type TCatalog = {
    name: string,
    name_ru: string,
    img: File,
}

export type TGetCatalog = () => Promise<TCatalog[]>;