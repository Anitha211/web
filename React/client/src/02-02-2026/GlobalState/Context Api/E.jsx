import { useContext } from "react";
import { Context } from "./A1";


function E(){
let {a,seta} = useContext(Context);
    // console.log("Increase:",a);
    
    return(
        <div>
             <h3>E</h3> 
             <p>Value from A1 Component - {a}</p>
        </div>
    )
}

export default E;