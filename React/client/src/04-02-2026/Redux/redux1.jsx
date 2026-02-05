import { createStore } from "redux";
let initialState = {
    count:30
}
function reducer(state=initialState, action){
    if(action.type == "reset"){
        // console.log("Payload:",action.payload);
            return {
                ...state,
                count: 0
            };
    } else {
        return state;
    }
}

export let store2 =createStore(reducer); 