import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";


// Global variables
var id = 0;

// slice method

const slice = createSlice({
    name: 'All Error',
    initialState: { shop:false, home:false },
    reducers: {
        AddError: (state,action) => {
            state.shop=action.payload;
        }
    }
})

export const { AddError } = slice.actions;
export default slice.reducer
