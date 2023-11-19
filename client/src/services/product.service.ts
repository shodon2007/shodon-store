import axios from "axios";
import { TProduct } from "../types/product";

class ProductService {
    getProducts = async (type: string) => {
        const resp = await axios.get<TProduct[]>('http://localhost:3000/api/product/all', {
            params: { type },
        }).then(res => res.data).catch(e => console.log('Ошибка', e));

        return resp;
    }
}

export default new ProductService();