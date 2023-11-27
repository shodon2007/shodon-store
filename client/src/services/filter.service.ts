import axios from "axios";
import { URL } from "../global";

class FilterService {
    async getFilter(type: string) {
        return await axios.get(`${URL}/api/filter`, { params: { type } }).then(data => data.data)
    }
}

export default new FilterService();