//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MessageCard from './MessageCard'

function App() {

  return (
    <>

       <MessageCard
        title="Welcome"
        message="This is my first reusable React component."
      />

      <MessageCard
        title="React Props"
        message="Props allow data to be passed from parent to child."
      />

      <MessageCard
        title="Reusable Components"
        message="Write once, reuse everywhere."
      />

      <MessageCard
        title="Done!"
        message="This card is also using the same component."
      />
    </>
  )
}

export default App
