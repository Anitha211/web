import React, { Suspense } from "react";
// import A from "./Components/A";
import B from "./Components/B";
import C from "./Components/C";
// import A from "./Parent to child/A";
import AA from "./Child to Child/AA";
import Child from "./State/Parent to child/Child";
// import Parent1 from "./State/Child to Parent/Parent1";
// import Parent from "./State/Child to child/Parent";
import P from "./State/29-01-2026/P";
// import A from "./State/29-01-2026/EX -1/A"
// import Parent from "./State/29-01-2026/EX-2/Parent";
import A from "./State/30-01-2026/Props/A"
import Parent from "./State/30-01-2026/Props drilling/Parent"
import Parent1 from "./State/30-01-2026/State lifiting/Parent1"



function App(){

  return(

  <>
      
      <B/>
      <C/>
      <AA/>
      <Child/>
      <Parent1/>
      <Parent/> 
      <P/> 
      <A/>
      <Parent/>
      <A/>
      
      
      
   </>

  )


}

export default App