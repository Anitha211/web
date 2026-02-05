import { createSlice } from "@reduxjs/toolkit";

let slice =createSlice ({
    name:"user",
    initialState : {
        profile:{
            name: "",
            email: "",
        },
        address:{
            city: "",
            state: "",
            country: ""
        },
    },
    reducers:{ 
        updateProfile : (state,action) => {
            state.profile.name = action.payload.name;
            state.profile.email = action.payload.email;
        },
        updateAddress : (state,action) => {
            state.address.city = action.payload.city;
            state.address.state = action.payload.state;
            state.address.country = action.payload.country;
        },
        clearUser : (state) => {
            state.profile.name = "";
            state.profile.email = "";
            state.address.city = "";
            state.address.state = "";
            state.address.country = "";
        }
    }

})

export default slice.reducer;
export let {updateProfile, updateAddress, clearUser} = slice.actions;
            



