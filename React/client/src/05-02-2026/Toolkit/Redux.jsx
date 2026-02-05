import { useDispatch, useSelector } from "react-redux";
import { Decrease, Increase, Reset } from "./Slice"; 

function Redux(){

    let value = useSelector((state) => {
        return state.Count.value;
    });
    console.log(value);
    
    let d= useDispatch();

    return(
        <div>
            <h4>Inc & Dec the value: {value}</h4>
            <button onClick={() => d(Increase(10))}>Increase</button>
            <button onClick={() => d(Decrease(5))}>Decrease</button>
            <button onClick ={() => d(Reset(0))}>Reset</button>
        </div>
    )
}

export default Redux;