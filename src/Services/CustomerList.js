// import axios from "axios";


// const CUSTOMER_REST_API_URL = "http://localhost:8181/customer/";

// class CustomerListService {
//     getCustomers() {
//        let customerId = localStorage.getItem("customer-info");
//         console.log("new id is " ,customerId);
//         return axios.get(CUSTOMER_REST_API_URL + customerId);
//     }
// }


// export default new CustomerListService;
import axios from "axios";


const CUSTOMER_REST_API_URL = "http://localhost:8181/customer/";

class CustomerListService{
    getCustomers() {
       
        return axios.get(CUSTOMER_REST_API_URL);
    }
}


export default new CustomerListService;