import { Product } from 'src/app/types/product';
import ApiGeneral from './generalApi';
import { FilterType } from 'src/app/types/filter';

class ProductApi extends ApiGeneral {
	async getAllProducts(filters: FilterType, type: string) {
		const res = await this.api.get<Product[]>(this.urls.products, {
			params: {
				filters,
				type,
			},
		});
		console.log(res);
		return res;
	}
}

export default new ProductApi();
