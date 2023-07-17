import axios from "./axios";

export const addCart = input => axios.post('/cart/addcart',input)

export const getCartsByUser = () => {
    return axios.get("/cart/getCartsByUser");
};

export const increateQuantity = input =>{
    return axios.patch('/cart/updateadd',input);
}

export const decreaseQuantity = input =>{
    return axios.patch('/cart/updatesubtract',input);
}

export const delQuantity = input =>{
    return axios.post('/cart/delcart',input);
}

export const checkOutProduct = input =>{
    console.log("===",input);

    return axios.post('/cart/checkoutproduct',input);
}
