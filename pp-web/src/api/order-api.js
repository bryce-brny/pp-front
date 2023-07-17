import axios from "./axios";


export const getOrdersByUser = () => {
    return axios.get("/order/getOrdersByUser");
};