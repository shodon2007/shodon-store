import { FilterType } from './filterApi'
import ApiGeneral from './generalApi'

export interface Attribute {
  id?: number
  title: string
  description: string
}

export interface CatalogItem {
  name_ru: string,
  img: string,
  id: number,
  name: string,
}

export interface Product extends CatalogItem {
  price: number
  brand_id: number
  rate: string
  reviews: string
  type_id: number
  attributes: Attribute[]
}

class ProductApi extends ApiGeneral {
  async getAllProducts (filters: FilterType, type: string) {
    const res = await this.api.get<Product[]>(this.urls.products, {
      params: {
        filters,
        type,
      }
    });
    console.log(res);
    return res;
  }
}

export default new ProductApi()
