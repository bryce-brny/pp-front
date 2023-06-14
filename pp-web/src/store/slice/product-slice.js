import {createSlice ,createAsyncThunk} from '@reduxjs/toolkit'
import * as productService from '../../api/product-api'


const initialState = {
    homeProducts:[],
};

export const addNewProduct = createAsyncThunk('/product/addproductpage',async (input)=>{
    console.log("ggggggggg",input) //fe
    let res = await productService.addProduct(input)
    console.log(res.data) //af br
    return res.data
})

export const removeProduct = createAsyncThunk('/product/removeproduct', async (del_id)=>{
    await productService.deleteProduct(del_id)
    return del_id
})

export const changeProduct = createAsyncThunk('/product/updateproduct',async(input)=>{
    await productService.updateProduct(input)
    return input
})


const productSlice = createSlice({
    name:'product',
    initialState,

    reducers:{
        setProducts: (state,action) =>{
            state.homeProducts = action.payload;
        },
    },
    extraReducers:builder=>
    builder.addCase(addNewProduct.fulfilled,(state,action)=>{
        state.homeProducts.unshift(action.payload)

    }).addCase(removeProduct.fulfilled,(state,action)=>{
        let idx = state.homeProducts.findIndex(el=>el.id === action.payload)
        state.homeProducts.splice(idx,1)

    }).addCase(changeProduct.fulfilled,(state,action)=>{
        let idx = state.homeProducts.findIndex(el=>el.id === action.payload.id)
        state.homeProducts[idx] = action.payload
    })

    
})
export const {setProducts} = productSlice.actions;
export default productSlice.reducer;