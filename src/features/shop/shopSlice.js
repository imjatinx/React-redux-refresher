import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchProducts = createAsyncThunk("fetch products", async () => {
    const response = await axios.get("https://fakestoreapi.com/products")
    return response.data;
})

export const shopSlice = createSlice({
    name: "shop",
    initialState: {
        isLoading: false,
        products: [],
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoading = true
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.products = action.payload
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            console.log('Error==>', action.payload);
            state.isLoading = false
            state.isError = true
        });
    }
})

export default shopSlice.reducer;