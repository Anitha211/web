import React, { useState } from "react"
import Child2 from "./Child2"

function Child1({name, B, onChangeName, onIncreaseValue }){

    return(
        <div>
            <h2>Child1 Component</h2>
            <button onClick={() => onChangeName()}>Change Name</button>
            <button onClick={() => onIncreaseValue()}>Increase Value</button>

            <Child2 name={name}
                    B={B}
            />
        </div>
    )
}

export default Child1;