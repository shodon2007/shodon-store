import axios, { AxiosError } from "axios";
import ApiGeneral from "./generalApi";
import { CatalogItem } from "./productApi";

class CatalogApi extends ApiGeneral {
	async getCatalog() {
    return await this.api.get<CatalogItem[]>(this.urls.catalog)
	}
}

export default new CatalogApi();
