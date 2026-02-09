import { createSlice } from "@reduxjs/toolkit";

let slice = createSlice({
    name : "todo",
    initialState:{
        list:[],
        action:"", 
        },
    reducers:{
        addTodo : (state, action) => {
            console.log(action.payload);
            state.list
            .push(action.payload);
            state.action = action.payload;
        },
        // removeTodo : (state, action) => {
        //     console.log(action.payload);        
        //     state.list = state.list.filter((todo) => {
        //         return todo !== action.payload;
        //     });
        //     state.action = action.payload;
        // }   
    }
})


export let {addTodo, removeTodo} = slice.actions;
export default slice.reducer;