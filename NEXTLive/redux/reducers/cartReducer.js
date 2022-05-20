import { createSlice } from "@reduxjs/toolkit";

// Global variables


// slice method

const slice = createSlice({
    name: 'cart reducer',
    initialState: [],
    reducers: {
        Add: (state, action) => {
            var chk = false;
            state.forEach((value, index) => {
                if (value._id === action.payload._id) {
                    state[index].quant = action.payload.quant;
                    chk = true;
                }
            })
            if (!chk) {
                state.push(action.payload)
            }
        },
        Sub: (state, action) => {
            var index = state.findIndex(value => value._id === action.payload._id);
            if (state[index].quant > 1) {
                state[index].quant--;
            }
            else {
                state.splice(index, 1)
            }
        },
        Delete: (state, action) => {
            
            var index = state.findIndex(value => value._id === action.payload._id);
            
            state.splice(index,1)
        }
    }
})

export const { Add, Sub, Delete } = slice.actions;
export default slice.reducer