import {createSlice , createAsyncThunk,current} from '@reduxjs/toolkit'
import * as cartService from'../../api/cart-api'

const initialState = {
    cartProduct:[],
}

export const updateAddCart = createAsyncThunk('cart/updateadd',async(input)=>{
    let res = await cartService.increateQuantity(input)
    console.log(res.data)
    return res.data
})

export const updateSubtractCart = createAsyncThunk('cart/updatesubtract',async(input)=>{
    let res = await cartService.decreaseQuantity(input)
    return res.data
})

export const delCart = createAsyncThunk('cart/delcart',async(input)=>{
    let res = await cartService.delQuantity(input)
    return res.data
})

export const addNewCart = createAsyncThunk('cart/addcart',async(input)=>{
    // console.log(input)
    let res = await cartService.addCart(input)
    // console.log('asdasdasdasd',res.data)
    return res.data
})

export const getAllCart = createAsyncThunk('cart/getCartsByUser', async()=>{
    const rs = await cartService.getCartsByUser()
    console.log("HIIIIIII", rs.data)
    return rs.data
})

export const checkOutProduct = createAsyncThunk(
    'cart/checkOutProduct',
    async (input, thunkApi) => {
      try {
    console.log("input",input)
        const response = await cartService.checkOutProduct(input);
        console.log('checkOutProduct response.data',response.data)
        return response.data
       
      } catch (error) {
        return thunkApi.rejectWithValue(error.response.data);
      }
    } 
  );

export const cartSlice = createSlice({
    name : 'cart',
    order:'',
    initialState,
    reduces:{},
    extraReducers:builder=>
    builder.addCase(addNewCart.fulfilled,(state,action)=>{
        state.cartProduct = action.payload
    }).addCase(getAllCart.fulfilled,(state,action)=>{
        state.cartProduct = action.payload
        state.loading = false
    }).addCase(updateAddCart.fulfilled,(state,action)=>{
        state.cartProduct = action.payload
    }).addCase(updateSubtractCart.fulfilled,(state,action)=>{
        state.cartProduct = action.payload
    }).addCase(delCart.fulfilled,(state,action)=>{
        state.cartProduct = action.payload
    }).addCase(checkOutProduct.fulfilled, (state, action) => {
        state.order = action.payload
      })
})

export default cartSlice.reducer;

