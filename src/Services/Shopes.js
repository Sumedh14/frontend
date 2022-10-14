import axios from "axios";


const SHOPES_REST_API_URL = "http://localhost:8181/shopes/shop";

class ShopesService {
    getShopes() {
        return axios.get(SHOPES_REST_API_URL);
    }
}


export default new ShopesService;