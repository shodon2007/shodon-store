import ApiGeneral from "./generalApi";


export type FilterType = Record<string, string[]>

class FilterApi extends ApiGeneral {
    async getFilter(type: string) {
        return await this.api.get<FilterType>(this.urls.filter, {
            params: {
                type
            }
        });
    }
}

export default new FilterApi();