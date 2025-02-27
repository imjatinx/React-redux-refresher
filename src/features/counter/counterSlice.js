import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 1,
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= state.value != 0 ? 1 : state.value
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer