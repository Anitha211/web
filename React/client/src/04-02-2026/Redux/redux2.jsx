import { createStore } from "redux";
let initialState = {
    Value: false,
}
function reducer(state = initialState, action){ 
    switch(action.type){
        case "Login":
        console.log("LOGIN:",action.payload);
        
        return{
            ...state,
            Value: "Welcome User",
            
        };

        case "Logout":
        console.log("LOGOUT:",action.payload);
        return{
            ...state,
            Value: "Please Login",
           
        };

        default:
            return state;
        }
    }
export let store3 = createStore(reducer);