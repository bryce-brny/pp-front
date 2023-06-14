import axios from "./axios";

export const getProductApi = () => axios.get('/product');

export const addProduct = input => axios.post('/product/addproductpage',input)

export const deleteProduct = async(id)=>{
    return await axios.delete(`/product/${id}`,id)
}

export const updateProduct = async(input) => {

    return await axios.patch(`/product/${input.id}`,input)
}