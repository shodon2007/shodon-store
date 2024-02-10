import axios from 'axios'
import { URLS } from '/shared/config/server/server'

export interface Attribute {
  id: number,
  title: string,
  description: string,
}

export interface Product {
  name_ru: string
  name: string
  id: number
  price: number
  img: string
  brand_id: number
  rate: string
  reviews: string
  type_id: number
  attributes: Attribute[]
}

class ProductApi {
  async getAllProducts() {
    return await axios.get<Product[]>(URLS.products).then(data => data.data)
  }
}

export default new ProductApi()
