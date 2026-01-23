import React, { Suspense } from "react";
import A from "./Components/A";
import B from "./Components/B";
import C from "./Components/C";


function App(){

  return(

      <Suspense>
        <A/>

        <B/>
        
        <C/>
       
      </Suspense>

  )


}

export default App