import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const getProduct =  createAsyncThunk('product', async () => {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data.products;
});

export default getProduct;