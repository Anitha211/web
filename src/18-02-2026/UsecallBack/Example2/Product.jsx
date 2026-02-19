import React from "react";

let Product = React.memo(({id, name, price, onDelect, onincrease}) => {

    console.log("Product Rendered:", name);
    

    return(

        <div>
            <p>{name} - {price}</p>
            <button onClick={() => onDelect(id)}> DELECT</button>
            <br/>
            <br/>

            <button onClick={() => onincrease(id)}>Price + 1500</button>
            <hr/>

        </div>
    )
})

export default Product;