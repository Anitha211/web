import React, { useState } from "react"

function Child2({name, B}){
    console.log(name)
    console.log(B);
    
    
    return(
        <div>
           <h2>Child2 Component</h2>
           <h2>Name: {name}</h2>
           <h2>value: {B}</h2>
        </div>
    )
}

export default Child2;