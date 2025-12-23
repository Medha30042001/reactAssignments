
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import Login from './components/Login'
import Todos from './components/Todos'
import ProtectedRoute from './components/ProtectedRoute'
import TodoDetails from './components/TodoDetails'
import NotFound from './components/NotFound'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          {/* Unprotected Routes */}
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />

          {/* Protected Routes and Dynamic Routes*/}
          <Route path='/todos' element={
            <ProtectedRoute>
              <Todos />
            </ProtectedRoute>
            } />
          <Route path='/todos/:todoId'
            element={
              <ProtectedRoute>
                <TodoDetails />
              </ProtectedRoute>
            } />

          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
