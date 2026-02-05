import { useDispatch, useSelector } from "react-redux";

function B(){

    let Value = useSelector((state) => {
        return state.Value
    });

    let d = useDispatch();

    console.log(Value);
    // console.log(d);
    
    return(
        
        <div>
            <h1>Login/Logout -</h1>
            <h1>{Value}</h1>
            <button onClick={() => d({type:"Login",payload:true})}>Login</button>
            <button onClick={() => d({type:"Logout",payload:false})}>Logout</button>
            
        </div>
       
    )
}
export default B;


