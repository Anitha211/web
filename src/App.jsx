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
// import A from "./State/30-01-2026/Props/A"
// import Parent from "./State/30-01-2026/Props drilling/Parent"
import Parent1 from "./State/30-01-2026/State lifiting/Parent1"
import A from "./02-02-2026/LocalState/useState/A"
import A1 from "./02-02-2026/GlobalState/Context Api/A1"
import { store } from "./03-02-2026/GlobalState/Redux/AAA";
import { Provider } from "react-redux"
import A2 from "./03-02-2026/GlobalState/ContextAPI/A2";

function App(){
  return(
    <Provider store={store}>
      <>
         <A2/>
      </>
    </Provider>
  )
}
export default App;