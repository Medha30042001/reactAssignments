import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoParent from './TodoParent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoParent />
    </>
  )
}

export default App
