import {createSlice ,createAsyncThunk} from '@reduxjs/toolkit'
import * as authService from '../../../api/auth-api'
import { removeAccessToken, setAccessToken } from '../../../utils/localstorage';


const initialState = {
    isAuthenticated: false,
    error:null,
    loading:false,
    user:null,
    initialLoading:true
};


export const registerAsync = createAsyncThunk(
    'auth/registerAsync', 
    async (input,thunkApi) => { // สามารถรับ parameter ได้ 2 ตัว 
    try{
        const res = await authService.register(input)
        setAccessToken(res.data.accessToken)
        const resFetchMe = await authService.fetchMe()
        return resFetchMe.data.user
        // return;
    }catch(err){
        return thunkApi.rejectWithValue(err.response.data.message) // ปกติแล้ว สิ่งที่ return มันจะมันเข้ามาอยู่ค่า fullfill 
                                                // ตัวนี้จะถุกมาเป็น paylaod ใน action line 49
    }
});
//ปกติ asyncThunk มีการดักจับ try catch ไห้เราแล้ว 
export const login = createAsyncThunk('auth/login',async (input,thunkApi) =>{
    try{
        const res = await authService.login(input);
        setAccessToken(res.data.accessToken);
        const resFetchMe = await authService.fetchMe()
        return resFetchMe.data.user

    }catch(err){

    }
})

export const fetchMe = createAsyncThunk('auth/fetchMe',async(_,thunkApi)=>{ //ไม่ต้องมี parameter
    try{
        const res = await authService.fetchMe();
        return res.data.user;
    }catch(err){
        return thunkApi.rejectWithValue(err.response.data.message);
    }
})

// ปกติ asyncThuck มันจะ return 3 ค่านี้ 
// auth/registerAsync/pending
// auth/registerAsync/rejected
// auth/registerAsync/fullfilled

export const logout = createAsyncThunk('auth/logout',async () => {
    removeAccessToken();
})


const authSlice = createSlice({
    name:'auth',
    initialState,

    // reducers:{
    //     register: (state,action) =>{
    //         state.user = action.payload;
    //     },
    //     startLoading: state =>{
    //         state.loading = true
    //     }
    // },

    extraReducers:builder=> //เขียนแบบนี้แทนข้างล่าง
    builder.addCase(logout.fulfilled,state=>{
        state.isAuthenticated = false;
        state.user = null;
    })
    .addCase(registerAsync.pending, state => {
        state.loading = true
    }).addCase(registerAsync.fulfilled, state=>{
        state.isAuthenticated = true;
        state.loading = false;
    }).addCase(registerAsync.rejected, (state,action)=>{
        state.error = action.payload; // err.response.data.message
        state.loading = false;
    })
    .addCase(login.fulfilled, (state,action) =>{
        state.isAuthenticated = true;
        state.user = action.payload;
    }).addCase(fetchMe.fulfilled,(state,action) => {
    
        state.isAuthenticated = true;
        state.user = action.payload;
        state.initialLoading = false
    }).addCase(fetchMe.rejected,(state,action)=>{

        state.error = action.payload;
        state.initialLoading = false
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