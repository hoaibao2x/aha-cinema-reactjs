import axios from "axios";
import { DOMAIN, TOKEN, TOKEN_MOVIE } from './varsSetting';

export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 3000
});

// Add a request interceptor
http.interceptors.request.use((config) => {
    // Do something before request is sent
    config.headers = {
        ...config.headers,
        'TokenCybersoft': TOKEN_MOVIE,
        // 'Authorization': 'Bearer' + JSON.parse(localStorage.getItem(TOKEN))
    }

    return config;
}, (errors) => {
    // Do something with request error
    return Promise.reject(errors);
});