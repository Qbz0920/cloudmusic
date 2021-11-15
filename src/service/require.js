import axios from 'axios'
import { BASE_URL } from './config';

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {},
    withCredentials: true
})

instance.interceptors.request.use(
    (config) => {
        return config;
    }
)

export default instance;