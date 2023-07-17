import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/slice/auth-slice'
// import cartReducer from './slice/cart-slice';
import productReducer from './slice/product-slice'
import cartReducer from './slice/cart-slice'
import orderReducer from './slice/order-slice'
import userReducer from'./slice/user-slice'


const store = configureStore({
    reducer:{
        auth: authReducer,
        product:productReducer,
        cart:cartReducer,
        order:orderReducer,
        user:userReducer,
    }
    
});

export default store;