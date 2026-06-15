import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cart/cartSlice.js';
import likeToCartReducer from "./features/likeCart/likeCartSlice.js";
const store = configureStore({
    reducer: {
        cart: cartReducer,
        like: likeToCartReducer,
    }
});

export default store 