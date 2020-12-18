import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://final-project-ewest17.herokuapp.com/api/test/';

class UserService {

    getPublicContent() {
        return axios.get(API_URL + 'all');
    }
    
    getUserContent() {
        return axios.get(API_URL + 'user', { headers: authHeader() });
    }
}

export default new UserService();