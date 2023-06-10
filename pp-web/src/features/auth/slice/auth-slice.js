import {createSlice ,createAsyncThunk} from '@reduxjs/toolkit'
import * as authService from '../../../api/auth-api'
import { setAccessToken } from '../../../utils/localstorage';


const initialState = {
    isAuthenticated: false,
    error:null,
    loading:false
};


export const registerAsync = createAsyncThunk(
    'auth/registerAsync', 
    async (input,thunkApi) => { // สามารถรับ parameter ได้ 2 ตัว 
    try{
        const res = await authService.register(input)
        setAccessToken(res.data.accessToken)
        // return;
    }catch(err){
        return thunkApi.rejectWithValue(err.response.data.message) // ปกติแล้ว สิ่งที่ return มันจะมันเข้ามาอยู่ค่า fullfill 
                                                // ตัวนี้จะถุกมาเป็น paylaod ใน action line 49
    }
});
//ปกติ asyncThunk มีการดักจับ try catch ไห้เราแล้ว 
export const login = createAsyncThunk('auth/login',async input =>{
    const res = await authService.login(input);
    setAccessToken(res.data.accessToken);
})

// ปกติ asyncThuck มันจะ return 3 ค่านี้ 
// auth/registerAsync/pending
// auth/registerAsync/rejected
// auth/registerAsync/fullfilled


const authSlice = createSlice({
    name:'auth',
    initialState,

    // reducers:{
    //     register: state =>{
    //         state.isAuthenticated = true;
    //     },
    //     startLoading: state =>{
    //         state.loading = true
    //     }
    // },

    extraReducers:builder=> //เขียนแบบนี้แทนข้างล่าง
    builder
    .addCase(registerAsync.pending, state => {
        state.loading = true
    }).addCase(registerAsync.fulfilled, state=>{
        state.isAuthenticated = true;
        state.loading = false;
    }).addCase(registerAsync.rejected, (state,action)=>{
        state.error = action.payload; // err.response.data.message
        state.loading = false;
    })
    .addCase(login.fulfilled, state =>{
        state.isAuthenticated = true;
    })
})

export default authSlice.reducer;
// export const {register} = authSlice.actions;

//another way 
// const registerAsync = input => async dispatch => {
//     try{
//         dispatch(startLoading())
//         const res = await authService.register(input);
//         setAccessToken(res.data.accessToken);
//         dispatch(register())
//         dispatch(stopLoading())
//     }catch(err){
        
//     }
// }