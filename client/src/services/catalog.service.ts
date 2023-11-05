import axios from "axios";
import { TGetCatalog } from "../types/catalog";

class CatalogService {
    getCatalog: TGetCatalog = async () => {
        return await axios.get('http://localhost:3000/api/catalog').then(res => res.data);
    }
}

export default new CatalogService();