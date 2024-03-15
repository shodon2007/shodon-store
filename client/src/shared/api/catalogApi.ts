import { CatalogItem } from 'src/app/types/product';
import ApiGeneral from './generalApi';

class CatalogApi extends ApiGeneral {
	async getCatalog() {
		return await this.api.get<CatalogItem[]>(this.urls.catalog);
	}
}

export default new CatalogApi();
