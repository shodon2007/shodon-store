import axios from 'axios'
import ApiGeneral from './generalApi'
import { URLS } from '../../../../../../../shared/config/server/server'

class CatalogApi extends ApiGeneral {
  async getCatalog () {
    return await axios.get(URLS.catalog)
  }
}

export default new CatalogApi()
