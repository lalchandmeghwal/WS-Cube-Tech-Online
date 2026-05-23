import { configureStore } from '@reduxjs/toolkit'
import addToCartReducer from './features/addToCartSlice.js';
const store = configureStore({
    reducer: {
        addToCart: addToCartReducer,
    }
});


export default store;