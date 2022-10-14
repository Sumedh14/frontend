import axios from "axios";


const CUSTOMER_REST_API_URL = "http://localhost:8181/order/orderHistory2/";

class OrderList {
    getOrders() {
       let customerId = localStorage.getItem("customer-info");
        console.log("new id is " ,customerId);
        return axios.get( CUSTOMER_REST_API_URL + customerId );
    }
}


export default new OrderList;