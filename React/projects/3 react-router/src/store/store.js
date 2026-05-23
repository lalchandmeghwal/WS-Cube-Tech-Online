import { configureStore } from "@reduxjs/toolkit";
import productReducer from './features/product/productSlice.js';
import cartReducer from './features/cart/cartSlice.js';
import oneProductReducer from './features/oneProduct/oneProductSlice.js';

const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
        oneProduct: oneProductReducer,
    },
});


export default store;