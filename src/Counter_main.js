import React, { useState } from "react";
import "./counter.css"

function Counter(props) {
    const[counter,setCounter]=useState(0)
    return(
        <>
            <div className="boss_container">
            <div className="main_continer">
                <div className="numbers">{props.index}</div>
                <div className="content_container">
                <button className="btn1" onClick={()=>setCounter(counter+1)}>+</button>
                <h1>{counter}</h1>
                <button className="btn1" onClick={()=>setCounter(counter-1)}>-</button>
                </div>
                <div className="reset_btn">
                    <button className="btn" onClick={()=>setCounter(()=>0)}>Reset</button>
                </div>
            </div>
            </div>
        </>
    )
}

export default Counter;