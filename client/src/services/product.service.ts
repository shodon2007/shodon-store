import axios from "axios";
import { TFilter, TProduct } from "../types/product";
import { URL } from "../global";

class ProductService {
    getProducts = async (filter: TFilter) => {
        const resp = await axios.get<TProduct[]>(`${URL}/api/product/all`, {
            params: { filter },
        }).then(res => res.data).catch(e => console.log('Ошибка', e));
        console.log(resp)

        return resp;
    }
}

export default new ProductService();