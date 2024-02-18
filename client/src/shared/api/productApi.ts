import axios from 'axios'
import { URLS } from '/shared/config/server/server'

export interface Attribute {
  id: number
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

class ProductApi {
  async getAllProducts (type: string) {
    return await axios.get<Product[]>(URLS.products, {
      params: {
        filters: {type}
      }
    }).then(res => res.data);
  }
}

export default new ProductApi()
