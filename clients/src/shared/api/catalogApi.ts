import axios from "axios";
import ApiGeneral from "./generalApi";
import { URLS } from "../config/server/server";

class CatalogApi extends ApiGeneral {
    getCatalog() {
        return axios.get(URLS.catalog);
    }
}

export default new CatalogApi();
