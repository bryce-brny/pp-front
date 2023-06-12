import axios from 'axios';
import { BACKEND_URL } from '../config/env';
import { getAccessToken } from '../utils/localstorage';

axios.defaults.baseURL = BACKEND_URL;
//เเบบเป็น 2 parameter 1. req อะไรออกไป 2.ในกรณีเกิด error ไห้ทำไง 
axios.interceptors.request.use(config => {
    const token = getAccessToken();
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
},
    err => Promise.reject(err)
);

export default axios