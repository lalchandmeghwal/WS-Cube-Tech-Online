import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const getOnePrduct = createAsyncThunk('oneProduct', async (id) => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);

    return response.data;
   
});

export default getOnePrduct;