import axios from "axios";

// export const serverUrl = 'https://store-server.shodon.ru';
export const serverUrl = "http://localhost:3000";

class ApiGeneral {
	public urls = {
		catalog: '/api/catalog',
		auth: '/api/auth',
		products: '/api/product/all',
		filter: '/api/filter',
	};
	public api = axios.create({
		baseURL: serverUrl,
	});
}

export default ApiGeneral;
