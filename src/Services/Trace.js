import axios from "axios";


const DISHES_REST_API_URL = "http://localhost:8181/order/liveOrder/";


class TraceService {
    getLive() {
        const user = JSON.parse(localStorage.getItem("user-info"));

        let custId = user.userId;
        return axios.get(DISHES_REST_API_URL + custId);
    }
}


export default new TraceService;



