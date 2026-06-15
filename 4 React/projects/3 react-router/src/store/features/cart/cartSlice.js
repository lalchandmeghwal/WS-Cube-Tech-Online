import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    like: localStorage.getItem('like') ? JSON.parse(localStorage.getItem('like')) : [],
    showLike:false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // add to cart
        addToCart: (state, action) => {
            state.cart = [action.payload, ...state.cart];
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        removeToCart: (state, action) => {
            state.cart = state.cart.filter(items => items.id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        changeQty: (state, action) => {
            const { id, finalQty } = action.payload;
            state.cart = state.cart.filter(obj => {
                if (obj.id === id) {
                    obj.qty = finalQty;
                };
                return obj;
            });
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },

        // like to Cart
        likeToCart: (state, action) => {
            state.like = [action.payload, ...state.like];
            localStorage.setItem('like', JSON.stringify(state.like));
        },
        removeToLike: (state, action) => {
            state.like = state.like.filter(items => items.id !== action.payload);
            localStorage.setItem('like', JSON.stringify(state.like));
        },
        closeLike: (state, action) => {
            state.showLike = action.payload;
        }




    }
});


export const { addToCart, removeToCart, changeQty, likeToCart, removeToLike, closeLike } = cartSlice.actions;



export default cartSlice.reducer;