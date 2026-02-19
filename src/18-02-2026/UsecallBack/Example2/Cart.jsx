import React, { useCallback, useState, useMemo } from "react";
import Product from "./Product";

function Cart(){
      
    let [product, setProduct] = useState([
        {id:1, name:"Laptop", price: 55000},
        {id:2, name:"Phone", price: 20000},
        {id:3, name:"Tabs", price: 40000}
    ]);

    let[count,setCount] = useState(0);

    console.log("Parent Rendered");

    let deleteProduct = useCallback((id)=>{

        console.log("Deleting:",id)
        setProduct(prev => prev.filter(product => product.id !==id))

    },[]);

    let IncreasePrice = useCallback((id)=>{

        console.log("increase:",id)
        setProduct((prev) =>
            prev.map((item) =>
             item.id == id ? {...item, price: item.price + 1500 } : item
            )
         
        )

    },[]);

    

    let totalPrice = useMemo(()=>{
        return product.reduce((sum, item)=> sum + item.price,0)
    },[product])
    
return(
        <div>
            <h2>Counter: {count}</h2>

            <button onClick={()=>setCount(count + 10)}>Increase</button>
            
            <h3>Total Price: {totalPrice} </h3>

            {product.map((item)=> (

                <Product key={item.id}
                         id={item.id}
                         name={item.name}
                         price={item.price}
                         onDelect={deleteProduct}
                         onincrease={IncreasePrice}
                />

            ))}

        </div>
    )
}

export default Cart;