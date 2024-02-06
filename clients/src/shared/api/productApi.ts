import axios from "axios"
import { URLS } from "../config/server/server"

export type Product = {
    name: string,
    id: number,
    price: number,
    img: string,
    brand_id: number,
    rate: string,
    reviews: string,
    type_id: number,
}

class ProductApi {
    async getAllProducts() {
        return await axios.get<Product[]>(URLS.products).then(data => data.data);
    }
}

export default new ProductApi();