import { createSlice } from "@reduxjs/toolkit";
import getOnePrduct from "./oneProductThunk";
import { act } from "react";


const initialState = {
    oneProduct:{},
    loading: true,
    error: null,
};

const oneProduct = createSlice({
    name: 'oneProduct',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getOnePrduct.pending, (state, action) => {
            state.loading = true
            state.error = null
        });
        builder.addCase(getOnePrduct.fulfilled, (state, action) => {
            state.oneProduct = action.payload;
            state.loading = false;
            
        });
        builder.addCase(getOnePrduct.rejected, (state, action) => {
            state.error = action.payload ;
            state.loading = false;
        });
    },

});


export default oneProduct.reducer;