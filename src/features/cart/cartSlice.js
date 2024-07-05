import { createSlice } from "@reduxjs/toolkit"

let products = []

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products
    },
    reducers: {
        addToCart: (state, action) => {
            state.products.push(action.payload)
        },
        removeFromCart: (state, action) => {
            const removeItem = state.products.filter(item => item.id !== action.payload)
            state.products = removeItem
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer;