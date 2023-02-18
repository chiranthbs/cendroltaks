import React from "react";
import Counter from "./component/Assignment_1/Counter.jsx"
 import Component_A from "./component/Assignment_2/Component_A.jsx"
import Boolean from "./component/Assignment_3/Boolean.jsx"


function App(){
    return(
<>
    <div className="AppDiv">
    <Counter  />
    </div>
    <div className="AppDiv1">
    <Component_A />
    </div>
    <div className="AppDiv2">
    <Boolean />
    </div>
</>

    )
}

export default App
