import { useState } from "react";

function Counter(){

    const [count, setCount] = useState(0);

    function increaseCount(){
        setCount(count + 1);
    }

    return(
        <>
            <h3>{count}</h3>
            <button onClick={increaseCount}>Increase</button>
        </>
    );
}

export default Counter;

