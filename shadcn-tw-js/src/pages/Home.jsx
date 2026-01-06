import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
        <p class='text-center text-4xl m-7 bg-amber-600 
            p-10 rounded text-white'>
                Integration of External UI Components in the React</p>
        <div class='flex gap-6 my-20 justify-center items-center'>
            
            <Link to='/form'
                class='rounded bg-amber-200 px-4 py-2 
                hover:bg-amber-300
                active:bg-amber-400 text-2xl
                transition-all duration-300 ease-in-out'>Feedback Form</Link>
            <Link to='/slide'
                class='rounded bg-amber-200 px-4 py-2 
                hover:bg-amber-300
                active:bg-amber-400 text-2xl
                transition-all duration-300 ease-in-out'>Slide Show</Link>
            <Link to='/todo'
                class='rounded bg-amber-200 px-4 py-2 
                hover:bg-amber-300
                active:bg-amber-400 text-2xl
                transition-all duration-300 ease-in-out'>Todo App</Link>
        </div>
    </>
  )
}

export default Home