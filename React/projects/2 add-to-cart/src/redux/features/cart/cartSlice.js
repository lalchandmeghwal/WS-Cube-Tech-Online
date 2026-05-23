import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: localStorage.getItem('CART') ? JSON.parse(localStorage.getItem('CART')):   [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart = [action.payload, ...state.cart];
            localStorage.setItem('CART', JSON.stringify(state.cart));
        },
        removeToCart: (state, action) => {
            state.cart = state.cart.filter((item, i) => item.id !== action.payload);
            localStorage.setItem('CART', JSON.stringify(state.cart));
        },
        changeQty: (state, action) => {
            const { id, finalQty } = action.payload;

            state.cart = state.cart.filter(obj => {
                if (obj.id === id) {
                    obj["qty"] = finalQty;
                };

                return obj;
            });
            localStorage.setItem('CART', JSON.stringify(state.cart));


        },
    },

});


export const {addToCart, removeToCart, changeQty} = cartSlice.actions



export default cartSlice.reducer;




















