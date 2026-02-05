import { createStore } from "redux";

let initialState = {
    count:0
}

function reducer(state=initialState, action){

     switch (action.type) {

        case "Increment":

            console.log("payload:", action.payload);

            return {...state,
                count: state.count + action.payload
            };

            case "Decrement":

            console.log("payload:", action.payload)
                
                 return {...state,
                count: state.count - 1
            };

            case "Reset":

                return {
                    ...state,
                    count: 0
                };
                
                default:
                    return state
    }
}

export let store1 =createStore(reducer); 

