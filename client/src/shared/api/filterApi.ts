import { type FilterType } from 'src/app/types/filter';
import ApiGeneral from './generalApi';

class FilterApi extends ApiGeneral {
	async getFilter(type: string) {
		return await this.api.get<FilterType>(this.urls.filter, {
			params: {
				type,
			},
		});
	}
}

export default new FilterApi();
