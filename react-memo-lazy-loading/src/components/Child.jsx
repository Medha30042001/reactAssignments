import React from 'react'

const Child = React.memo( () => {
    console.log("Child rendered");
  return (
    <div>Child (Heavy UI)</div>
  )
});

export default Child