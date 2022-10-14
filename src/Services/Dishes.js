import axios from "axios";


const DISHES_REST_API_URL = "http://localhost:8181/dish/";

class DishesService {
    getDishes() {
        let shopId = localStorage.getItem("shop-info");
        console.log(shopId);
        return axios.get(DISHES_REST_API_URL + shopId);
    }
}


export default new DishesService;