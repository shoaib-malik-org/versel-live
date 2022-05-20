import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";


// Global variables
var id = 0;

// slice method

const slice = createSlice({
    name: 'All products',
    initialState: [],
    reducers: {
        addProdReducer: (state, action) => {
            action.payload.forEach((value, index) => {
                state[index] = value
            })
        },
    }
})

const tasks = tasks => tasks
const finder = (num, tasks) => tasks.find(task => task.task.length === num)
const first = tasks => tasks.task.length
const rev = lengths => lengths.reverse();

const len = (tasks, Func) => {
    var lengths = tasks.map(first)
    lengths.sort(function (a, b) { return b - a });
    Func(lengths);
    const sorted = lengths.map(num => finder(num, tasks))
    return sorted;
}

export const taskSort = createSelector(tasks, tasks => len(tasks, () => { }))

export const lowHigh = createSelector(tasks, tasks => len(tasks, rev))

export const srhTask = (tasks, word) => tasks.filter(task => task.task.indexOf(word) !== -1)

export const { addProdReducer } = slice.actions;
export default slice.reducer










// tasks.find(task => task.task.length === num)


// Creating Actions

/*
* in this method you have to create action and reducer differently but the upper slice method
* keep in one
*/

// export const task_add = createAction("task_added");
// export const task_completed = createAction("task_completed");

// // creating reducer
// export const reducer = createReducer(
//     [],
//     {
//         [task_add.type]: (state, action) => {
//             state.push({
//                 id: id++,
//                 task: action.payload,
//             })
//         }
//         ,
//         [task_completed.type]: (state, action) => {
//             console.log(action)
//             const index = state.findIndex( task =>
//                 true
//             )
//             state.splice(0,1);
//         }
//     }
// )