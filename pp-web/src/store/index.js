import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/slice/auth-slice'
import productReducer from './slice/product-slice'


const store = configureStore({
    reducer:{
        auth: authReducer,
        product:productReducer
    }
    
});

export default store;