import axios from "axios"
import { TCreateCatalog } from "../types/catalog";

const getCatalog = async () => {
    return await axios.get('http://localhost:3000/api/catalog').then(res => res.data);
}

const postCatalog = async (catalogItem: TCreateCatalog, token: string) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    return await axios.post('http://localhost:3000/api/catalog', catalogItem, config);
}

export {
    getCatalog,
    postCatalog,
};