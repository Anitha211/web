import React, { useState } from "react"
import Child1 from "./Child1"


function Parent(){
    let[name, setName] = useState("JS")
    let[B,setB] = useState(0);

let increase = ()=> {
    setB(B+1)
}
let ChangeName = () => {
    setName("React")
}
return(
    <div>
        <h2>Parent Component</h2>
        <Child1 
            name={name}
            B={B}
            onChangeName ={ChangeName}
            onIncreaseValue={increase}
        />
        
    </div>
    )
}

export default Parent;