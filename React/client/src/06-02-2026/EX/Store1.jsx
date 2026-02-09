import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Slice4";

let store = configureStore({
    reducer:{
        todo : todoReducer
    }
})

export default store;
