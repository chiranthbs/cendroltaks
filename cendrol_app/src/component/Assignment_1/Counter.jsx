import React from "react"
import { useState } from "react"
import "./style.css"

const Counter =()=>{

    let [count,setCount]=useState(0)
    let increase=()=>{
        setCount(count+1)
    }

    let colorChange=()=>{
       let btnBlock=document.getElementById("btnBlock")
       btnBlock.style.backgroundColor="mediumspringgreen"
    }
    
    return(
        <>
        <div id="mainDiv">
        <button id="btnBlock" onClick={increase} >
        <h1>{count}</h1>
        <h5 ><u>Click to increase counter</u></h5>
        </button><br></br>
        </div>
        <button id="colorButton" onClick={colorChange} >Change Color</button>
        </>
    )
}

export default Counter