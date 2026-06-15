import { configureStore } from "@reduxjs/toolkit";
import productReducer from './features/product/productSlice.js';
import cartRedecer from './features/cart/cartSlice.js';

const store = configureStore({
    reducer: {
        product: productReducer,
        cart:cartRedecer,
    },
});


export default store;