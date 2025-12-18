import { useEffect } from 'react';
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    function increaseCount(){
        setCount(prev => prev + 1);
    }

    useEffect(() => {
        if(count%3===0 && count !== 0){
            alert(`The current number ${count} is divisible by 3`);
        }
    }, [count])

  return (
    <>
        <p>{count}</p>
        <button onClick={increaseCount}>Increase</button>
    </>
  )
}

export default Counter;