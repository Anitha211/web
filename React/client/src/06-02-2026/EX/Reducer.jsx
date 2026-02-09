import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./Slice4";

function Reducer(){
    let list = useSelector((state) => {
        return state.todo.list;
    });

    let dispatch = useDispatch();   

    // console.log(list);  


    let [text, setText] = useState("");

    function handleAddTodo(){
        dispatch(addTodo(text));
        setText("");
    }       

    return(
        <div>
            <h1>Todo List:</h1>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />  

            <button onClick={handleAddTodo}>Add Todo</button>
            {/* <button onClick={() => dispatch(removeTodo(text))}>Remove Todo</button> */}

            <ul>    
                {list.map((todo, index) => {
                    return <li key={index}>{todo}</li>
                }   )}
            </ul>
            
            
        </div>  
    )
}

export default Reducer;


   
