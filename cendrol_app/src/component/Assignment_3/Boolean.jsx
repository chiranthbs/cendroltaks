import React from "react";
import { useState } from "react";

const Boolean = () => {
  let [variable, setVariable] = useState(true);
  

  let handleChange = () => {
    if (variable === true) {
      let button = document.getElementById("btnref");
      button.style.backgroundColor = "red";
      button.innerText = "It is True, click again for False";
      setVariable(false);
    } else {
      let button = document.getElementById("btnref");
      button.style.backgroundColor = "blue";
      button.innerText = "It is False, click again for True";
      setVariable(true);
    }
  };

  return (
    <>
      <button id="btnref" onClick={handleChange}>
        Click to Check Whether True or False
      </button>
    </>
  );
};

export default Boolean;
