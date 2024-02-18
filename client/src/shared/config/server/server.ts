// const serverUrl = 'https://store-server.shodon.ru';
const serverUrl = 'http://localhost:3000';

const URLS = {
  catalog: `${serverUrl}/api/catalog`,
  auth: `${serverUrl}/api/auth`,
  products: `${serverUrl}/api/product/all`
}

export { 
  serverUrl, 
  URLS 
}
