
import reducer from "./reducers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer,
    
});



// returns a store object
// configureStore(
//     {
//         reducer
//     }
// )