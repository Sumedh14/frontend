import axios from "axios";


const DISHES_REST_API_URL = "http://localhost:8181/dish/dish/";

class DishesUpdateService {
    getDishes() {
        let dishId = localStorage.getItem('dish-info');
        return axios.get(DISHES_REST_API_URL + dishId);
    }
}


export default new DishesUpdateService;