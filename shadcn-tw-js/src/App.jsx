import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FeedbackForm from './pages/FeedbackForm'
import ImageSlideshow from './pages/ImageSlideshow'
import TodoApp from './pages/TodoApp'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/form' element={<FeedbackForm />} />
      <Route path='/slide' element={<ImageSlideshow />} />
      <Route path='/todo' element={<TodoApp />} />
    </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App
