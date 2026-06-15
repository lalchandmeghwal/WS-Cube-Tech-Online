import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    loading: true,
    error: null,
};

const fetchProduct = createAsyncThunk('/fetch/product', async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    return data.products;

});

const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        });
        builder.addCase(fetchProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },

});



export { fetchProduct };



export default productSlice.reducer;