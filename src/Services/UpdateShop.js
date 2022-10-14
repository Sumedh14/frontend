import axios from "axios";


const CUSTOMER_REST_API_URL = "http://localhost:8181/shopes/";

class ShopService {
    getShop() {
       let shopId = localStorage.getItem("Shopkeper-info");
       //cust-info
       console.log("service shop id" ,shopId);
        return axios.get(CUSTOMER_REST_API_URL + shopId);
    }
}


export default new ShopService;