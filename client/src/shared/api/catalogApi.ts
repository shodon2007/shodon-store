import axios, { AxiosResponse } from 'axios'
import ApiGeneral from './generalApi'
import { URLS } from '/shared/config/server/server'
import { CatalogItem } from './productApi'

class CatalogApi extends ApiGeneral {
  async getCatalog () {
    return await axios.get<CatalogItem[]>(URLS.catalog)
  }
}

export default new CatalogApi()
