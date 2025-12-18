import { useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

function Component1() {

    const [status, setStatus] = useState(false);

    function changeStatus(){
        setStatus(prev => !prev);
    }

  return (
    <>
        <button 
        onClick={changeStatus}
        >
            Toggle Status
        </button>
        {status ? <ComponentA /> : <ComponentB />}
    </>
  )
}

export default Component1;