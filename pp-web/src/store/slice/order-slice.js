import {createSlice , createAsyncThunk,current} from '@reduxjs/toolkit'
import * as orderService from'../../api/order-api'

const initialState = {
    orderProduct:[],
}

export const getAllOrder = createAsyncThunk('order/getOrdersByUser', async()=>{
    console.log("first")
    const rs = await orderService.getOrdersByUser()
    console.log("HIIIIIII", rs.data)
    return rs.data
})



export const orderSlice = createSlice({
    name : 'order',
    order:'',
    initialState,
    reduces:{},
    extraReducers:builder=>
    builder.addCase(getAllOrder.fulfilled,(state,action)=>{
        state.orderProduct = action.payload
        state.loading = false
    })
})

export default orderSlice.reducer;

