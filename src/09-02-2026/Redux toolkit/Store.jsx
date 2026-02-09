import { configureStore } from "@reduxjs/toolkit";
import bulbReducer from "./Slice";

let store =configureStore({
    reducer: {
     bulb : bulbReducer,

    }
});

export default store;