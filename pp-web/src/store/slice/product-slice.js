import {createSlice ,createAsyncThunk} from '@reduxjs/toolkit'


const initialState = {
    homeProducts:[],
};

const productSlice = createSlice({
    name:'product',
    initialState,

    reducers:{
        setProducts: (state,action) =>{
            state.homeProducts = action.payload;
        },
    },

    
})
export const {setProducts} = productSlice.actions;
export default productSlice.reducer;