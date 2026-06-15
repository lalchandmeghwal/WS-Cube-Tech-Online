import { createSlice } from "@reduxjs/toolkit"
import getProduct from "./productThunk";


const initialState = {
    product: [],
    loading: true,
    error: null,
};


const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // get product
        builder.addCase(getProduct.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.product = action.payload;
            state.loading = false;
           
        });
        builder.addCase(getProduct.rejected, (state, action) => {
            state.loading = true;
            state.error = action.error.message;
        });
    }
})

export default productSlice.reducer
