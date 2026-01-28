import React, { Suspense } from "react";
import A from "./Components/A";
import B from "./Components/B";
import C from "./Components/C";
// import A from "./Parent to child/A";
import AA from "./Child to Child/AA";
import Child from "./State/Parent to child/Child";
// import Parent1 from "./State/Child to Parent/Parent1";
import Parent from "./State/Child to child/Parent";



function App(){

  return(

      <>
      <Child/>
      <Parent/>
      </>

  )


}

export default App