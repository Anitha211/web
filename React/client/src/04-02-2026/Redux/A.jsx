import { useDispatch, useSelector } from "react-redux";
import { Provider } from "react-redux";
import { store3 } from "./redux2";
import B from "./B"

function AB() {

    let count = useSelector((state) => {
        return state.count
    });    
    
    let dispatch = useDispatch();
    console.log(count);
    // console.log(dispatch);
    
return (
     
    <Provider store={store3}>
    <div>

        <p>Count: {count}</p>
        <button onClick={() => dispatch({type:"reset"})}>Reset</button>
        <B/>

    </div>
    </Provider>

  );
  
}

export default AB;