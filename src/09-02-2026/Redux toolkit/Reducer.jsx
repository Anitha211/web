import { useDispatch, useSelector } from "react-redux";
import { turnOff, turnOn } from "./Slice";

function Reducer(){
    let isOn = useSelector((state) => {
        return state.bulb.isOn;
    });
    // console.log(isOn);
    let Action = useSelector((state) => {
        return state.bulb.action;
    });

    let d = useDispatch();
    return(
    <div>
          <h1>Redux Toolkit</h1>
          <h2>Is On: {isOn}</h2>
          <h2>Action: {Action}</h2>
        <button onClick={() => d(turnOn("Bulb is ON"))}>Turn On</button>
        <button onClick={() => d(turnOff("Bulb is OFF"))}>Turn Off</button>

    </div>
    
)
}

export default Reducer;