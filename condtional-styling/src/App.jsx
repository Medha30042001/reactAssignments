import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ConStyling from './conStyling'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ConStyling />
    </>
  )
}

export default App
