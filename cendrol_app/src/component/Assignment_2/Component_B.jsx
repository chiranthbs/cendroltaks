import React from "react";


const Component_B = (props) => {
  let increment1 = () => {
    let increase= document.getElementById("valueIncrease");
    increase.innerHTML = props.data + 10
  };

  return (
    <div>
      <h1 id="valueIncrease">{props.data}</h1>

      <button onClick={increment1}>Click To Increment</button>
    </div>
  );
};

export default Component_B;
