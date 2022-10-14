import axios from "axios";


const DISHES_REST_API_URL = "http://localhost:8181/deliveryAgent/receivedOrderV/";

class AgentService {
    getAgent() {
        // const user = JSON.parse(localStorage.getItem("agent-info"));

        // let daId = user.userId;
        let daId = localStorage.getItem("agent-info")
        return axios.get(DISHES_REST_API_URL + daId);
    }
}


export default new AgentService;

// import axios from "axios";

//  const AGENT_REST_API_URL = "http://localhost:8181/deliveryAgent/receivedOrderV/"

// class AgentService {
//     getAgent() {
//         const user = JSON.parse(localStorage.getItem("user-info"));
//         console.log(user)
//         let daId = user.userId;
//         console.log(daId)
//         const k=axios.get(AGENT_REST_API_URL+daId)
//         console.log(k)
//         return k

//     //     getAgent() {
//     //         let agentrId = localStorage.getItem("agent-info");
//     //         //cust-info
//     //      //    console.log(shopId);
//     //          return axios.get(AGENT_REST_API_URL + agentrId);
//     //      }
        
//      }

//     }

// export default new AgentService