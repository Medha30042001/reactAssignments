import { useState } from "react";

function ConStyling() {
    const [status, setStatus] = useState(false);
    function changeColor(){
        setStatus(prev => !prev);
    }

    const [status1, setStatus1] = useState(false);
    function changeClass(){
        setStatus1(prev => !prev);
    }
  return (
    <>
    <div style={{backgroundColor: status?"blue":"red"}}>Conditional inline styling</div>
    <button onClick={changeColor}>Change Color</button>

    <div className={status1?"blueClass":"redClass"}>Conditional className</div>
    <button onClick={changeClass}>Change color</button>
    </>
  )
}

export default ConStyling;