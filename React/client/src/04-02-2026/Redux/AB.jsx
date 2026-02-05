import { useDispatch, useSelector } from "react-redux";
import { store2 } from "./redux1";
import { Provider} from "react-redux";
import A from "./A"
function AB() {
  let count = useSelector((state) => {
        return state.count
    });    
    
    let dispatch = useDispatch();
    console.log(count);
    // console.log(dispatch);
return (
  <Provider store={store2}>
    <div>
      <h1>Payload redux</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({type:"Increment",payload:"10"})}>Increment</button>
      <button onClick={() => dispatch({type:"Decrement",payload:5})}>Decrement</button>
      <button onClick={() => dispatch({type:"Reset"})}>Reset</button>
      <A/>
    </div>
  </Provider>
    );
  }
export default AB;