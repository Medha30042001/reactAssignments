import React, { lazy, Suspense, useState } from 'react'
// import Child from './Child';

const Child = lazy(() => import('./Child'));

const Home = () => {

  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(c => c + 1)}>Increment Count</button>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Child />
      </Suspense>
      
    </>
  )
}

export default Home