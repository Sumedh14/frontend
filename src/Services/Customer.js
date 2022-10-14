import axios from "axios";


const CUSTOMER_REST_API_URL = "http://localhost:8181/customer/";

class CustomerService {
    getCustomer() {
       let customerId = localStorage.getItem("customer-info");
       //cust-info
    //    console.log(shopId);
        return axios.get(CUSTOMER_REST_API_URL + customerId);
    }
}


export default new CustomerService;