import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { store } from '../store'


// Global variables
var id = 0;

// slice method

const slice = createSlice({
    name: 'Categorised Product',
    initialState: {
        headphone: { data: [], status: false },
        earphone: { data: [], status: false },
        watch: { data: [], status: false },
        HomeOffice: { data: [], status: false },
        Lighting: { data: [], status: false },
        HomeDeco: { data: [], status: false },
        DiningRoom: { data: [], status: false },
        Kitchen: { data: [], status: false },
        NurseryKids: { data: [], status: false },
        Bathroom: { data: [], status: false },
        Hallway: { data: [], status: false },
        Outdoor: { data: [], status: false },
    },
    reducers: {
        cate: (state, action) => {
            if (action.payload.know === 'Living Room') {
                state.LivingRoom.data.splice(0, state.LivingRoom.data.length)
                action.payload.prod.map(obj => state.LivingRoom.data.push(obj))
            } else if( action.payload.know === 'Kitchen'){
                state.Kitchen.data.splice(0, state.Kitchen.data.length)
                action.payload.prod.map(obj => state.Kitchen.data.push(obj))
            }
            else {
                alert(`please add Category's if`)
            }

        },
        cateStatus: (state, action) => {
            if (action.payload.know === 'Living Room') {
                state.LivingRoom.status = true;
            } else if( action.payload.know === 'Kitchen') {
                state.Kitchen.status = true;
            }

            else {
                alert(`please add status's if`)
            }
        }
    }
})


export const { cate, cateStatus } = slice.actions;
export default slice.reducer