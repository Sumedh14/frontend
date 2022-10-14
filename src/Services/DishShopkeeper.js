import axios from "axios";


const DISHES_REST_API_URL = "http://localhost:8181/dish/";

class DishesShopkeeperService {
    getDishes() {
        let user = localStorage.getItem("user-info");
        let shop = JSON.parse(user);
        let shopId = shop.userId;
        return axios.get(DISHES_REST_API_URL + shopId);
    }
}


export default new DishesShopkeeperService;