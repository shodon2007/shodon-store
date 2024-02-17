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
  async getAllProducts () {
    return await axios.get(URLS.products).then(data => {
      const products: Product[] = data.data.map((el: any) => {
        el.attributes = JSON.parse(el.attributes);
        return el;
      })
      return products;
    })
  }
}

export default new ProductApi()
