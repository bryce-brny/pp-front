import {createSlice ,createAsyncThunk} from '@reduxjs/toolkit'
import * as userService from '../../api/user-api'


const initialState = {
    profile:{},
    address:{},
    slip:''
};

export const getAddress = createAsyncThunk('/user/getaddress',async ()=>{
    try{
        const res = await userService.getAddressApi()
        console.log(res.data) 
        return res.data
    }catch(err){
        console.log(err)
    }
    
})

export const updateAddress = createAsyncThunk('/user/updatesddress',async(input)=>{
    try{
        const res = await userService.updateAddressApi(input)
        return res.data
    }catch(err){
        console.log(err)
    }
})

export const uploadImage = createAsyncThunk('/user/uploadimage',async(input)=>{
    try{
        const res = await userService.uploadImage(input)
        return res.data
    }catch(err){
        console.log(err)
    }
})




const userSlice = createSlice({
    name:'user',
    initialState,

    reducers:{
        editProvince: (state,action) =>{
            state.address.province = action.payload;
        },
        editDistrict: (state,action) =>{
            state.address.district = action.payload;
        },
        editSubDistrict: (state,action) =>{
            state.address.subDistrict = action.payload;
        },
        editCountry: (state,action) =>{
            state.address.country = action.payload;
        },
        editPostcode: (state,action) =>{
            state.address.postCode = action.payload;
        },
        
    },
    extraReducers:builder=>
    builder.addCase(getAddress.fulfilled,(state,action)=>{
        state.address = action.payload

    }).addCase(uploadImage.fulfilled,(state,action)=>{
        state.slip = action.payload

    })
    
})
export const {editProvince,editDistrict,editSubDistrict,editCountry,editPostcode} = userSlice.actions;
export default userSlice.reducer;