import axios from "axios";
import { TGetCatalog } from "../types/catalog";
import { URL } from "../global";

class CatalogService {
    getCatalog: TGetCatalog = async () => {
        return await axios.get(`${URL}/api/catalog`).then(res => res.data);
    }
}

export default new CatalogService();