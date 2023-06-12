import axios from "./axios";

export const register = input => axios.post('/auth/register',input);
export const login = input => axios.post('/auth/login',input);
// export const fetchMe = () => axios.get('/auth/me',{headers:{Authorization:'Bearer'}}) // เมื่อใช้ function นี้ ไห้ไปเรียก axios req ไปที่ /auth/me  // {headers:{Authorization:'Bearer'} คือ repeat code
export const fetchMe = () => axios.get('/auth/me')