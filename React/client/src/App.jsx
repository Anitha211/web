import React, { Suspense } from "react";
// import A from "./Components/A";
// import B from "./Components/B";
// import C from "./Components/C";
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
// import A from "./02-02-2026/LocalState/useState/A"
// import A1 from "./02-02-2026/GlobalState/Context Api/A1"
// import { store } from "./03-02-2026/GlobalState/Redux/AAA";
import { Provider } from "react-redux"
import A2 from "./03-02-2026/GlobalState/ContextAPI/A2";
// import { store1 } from "./04-02-2026/Redux/redux";
import AB from "./04-02-2026/Redux/AB";
// import { a } from "./05-02-2026/React Redux/redux";
// import A from "./05-02-2026/React Redux/A"

// import store from "./06-02-2026/Toolkit/Store";
// import Reducer from "./06-02-2026/Toolkit/Reducer";

// import store from "./09-02-2026/Redux toolkit/Store";
import Reducer from "./09-02-2026/Redux toolkit/Reducer";

import A from "./10-02-2026/useState/Parent"
import A1 from "./10-02-2026/Context API/A1"
import {store} from "./10-02-2026/Redux/Store"
import Redux from "./10-02-2026/Redux/Aa"

function App(){
  return(
    <Provider store={store}>
      <div>
      <A/>
      <hr></hr>
      <A1/>
      <hr></hr>
      <Redux/> 
      </div>
      </Provider>
    )
}
export default App;