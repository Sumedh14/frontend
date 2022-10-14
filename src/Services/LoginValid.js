import axios from "axios";


const LOGIN_REST_API_URL = "http://localhost:8181/login/validate";

class LoginService {
    getLogin() {
        return axios.get(LOGIN_REST_API_URL);
    }
}


export default new LoginService;