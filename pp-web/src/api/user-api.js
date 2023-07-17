import axios from "./axios";


export const getAddressApi = () => {
    return axios.get("/user/address");
};

export const updateAddressApi = (input)=>{
    return axios.put("/user/updateaddress",input);
};

export const uploadImage = (orderId,input)=>{
    return axios.patch(`/user/image/${orderId}`,input);
};