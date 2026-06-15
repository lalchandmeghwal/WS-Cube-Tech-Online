import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    like: localStorage.getItem('like') ? JSON.parse(localStorage.getItem('like')) : [],
    showLike: false,
}
const addToCartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        addToCart: (state, action) => {
            state.cart = [action.payload, ...state.cart];
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        removeToCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        changeQty: (state, action) => {
            const { id, finalQty } = action.payload;
            state.cart = state.cart.filter(item => {
                if (item.id == id) {
                    item.qty = finalQty;
                }
                return item;
            });

            localStorage.setItem('cart', JSON.stringify(state.cart))

        },


        // like to cart

        likeToCart: (state, action) => {
            state.like = [action.payload, ...state.like];
            localStorage.setItem('like', JSON.stringify(state.like))
        },
        ulLikeToCart: (state, action) => {
            state.like = state.like.filter(item => item.id !== action.payload);
            localStorage.setItem('like', JSON.stringify(state.like));
        },
        closeLike: (state, action) => {
            state.showLike = action.payload;
        }


    }


});

export const { addToCart, removeToCart, changeQty, likeToCart, ulLikeToCart, closeLike } = addToCartSlice.actions;


export default addToCartSlice.reducer