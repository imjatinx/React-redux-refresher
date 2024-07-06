import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cartReducer from '../features/cart/cartSlice'
import shopReducer from '../features/shop/shopSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer,
        shop: shopReducer,
    },
})