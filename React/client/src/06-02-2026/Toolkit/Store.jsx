import {configureStore} from "@reduxjs/toolkit"
import CounterReducer from "./Slice"
import userReducer  from "./Slice1";
import authReducer from "./Slice2";
import bulbReducer from "./Slice3";

let store = configureStore({
   reducer:{ 
    Count : CounterReducer,
    user : userReducer,
    auth : authReducer,
    bulb : bulbReducer,
  }
 })

export default store;