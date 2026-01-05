import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
        <div class=' rounded-3xl m-7 bg-purple-50 p-7'>
            <button class='rounded bg-gray-200 px-3.5 py-1.5 
                        hover:bg-gray-300
                        active:bg-gray-400
                        transition-all duration-300 ease-in-out
                        m-7'>Click</button>
            <Link to="/combined"
             class='rounded bg-blue-200 px-3.5 py-1.5 
                        hover:bg-blue-300
                        active:bg-blue-400
                        transition-all duration-300 ease-in-out
                        m-7'>Go To Combined Page</Link>

            <img src="https://cdn.pixabay.com/photo/2021/12/12/20/00/play-6865967_1280.jpg" 
                alt="dice"
                class='rounded-2xl shadow-lg 
                    hover:scale-105 w-2xs m-4
                    transition-all duration-300 ease-in-out ' />

            <h2 class='text-xl md:text-3xl lg:text-5xl 
                    transition-all duration-300 ease-in-out
                    font-bold
                    bg-linear-to-r 
                    from-indigo-500 
                    via-purple-500 
                    to-pink-500
                    bg-clip-text text-transparent'>Responsive Text</h2>

            <ul class='list-disc list-inside pl-5 mt-4'>
                <li class='hover:text-blue-600'>Monday</li>
                <li class='hover:text-blue-600'>Tuesday</li>
                <li class='hover:text-blue-600'>Wednesday</li>
                <li class='hover:text-blue-600'>Thursday</li> 
                <li class='hover:text-blue-600'>Friday</li>
                <li class='hover:text-blue-600'>Saturday</li>
                <li class='hover:text-blue-600'>Sunday</li>
            </ul>

            <div className='rounded-2xl p-7 mt-5 flex flex-col w-100 bg-white
                            justify-center items-center gap-2
                            shadow-lg'>
                <img src="https://a.storyblok.com/f/178900/426x600/15aac0647e/817e89897ed7e827447948655d71bcf71358042234_full.png/m/426x600"
                 alt="hobbit" class=' rounded-2xl w-2/3' />
                <h3><span class='font-bold'>Title</span>: Hobbit</h3>
                <p class='text-center'><span class='font-bold'>Description</span> : Bilbo Baggins as he continues to accompany Thorin Oakenshield and his fellow dwarves on a quest to reclaim the Lonely Mountain from the dragon Smaug.</p>
                <button class='bg-gray-200 px-4 py-2 rounded-lg
                                hover:bg-gray-300 active:bg-gray-400
                                '>Add book</button>
            </div>

            <table class='w-full border border-gray-300 m-4 shadow-lg'>
                <thead>
                    <tr class='bg-gray-200'>
                        <th class='border border-gray-300 px-4 py-2 text-left'>Square</th>
                        <th class='border border-gray-300 px-4 py-2 text-left'>Circle</th>
                        <th class='border border-gray-300 px-4 py-2 text-left'>Triangle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class='odd:bg-white even:bg-gray-100 hover:bg-gray-200'>
                        <td class='border border-gray-100 px-4 py-2'>Cracker</td>
                        <td class='border border-gray-100 px-4 py-2'>Earth</td>
                        <td class='border border-gray-100 px-4 py-2'>Pyramids</td>
                    </tr>
                    <tr class='odd:bg-white even:bg-gray-100 hover:bg-gray-200'>
                        <td class='border border-gray-100 px-4 py-2'>Tile</td>
                        <td class='border border-gray-100 px-4 py-2'>Apple Pie</td>
                        <td class='border border-gray-100 px-4 py-2'>Hat</td>
                    </tr>
                    <tr class='odd:bg-white even:bg-gray-100 hover:bg-gray-200'>
                        <td class='border border-gray-100 px-4 py-2'>Kite</td>
                        <td class='border border-gray-100 px-4 py-2'>CD</td>
                        <td class='border border-gray-100 px-4 py-2'>Tacos</td>
                    </tr>
                </tbody>
            </table>

            <form class='rounded-lg flex flex-col items-center gap-2 
                    bg-violet-100 w-60 p-4 shadow-lg'>
                <input type="text"
                placeholder='Enter Name'
                class='rounded-lg bg-white px-4 py-2 border border-gray-300
                        focus:outline-yellow-500 focus:bg-yellow-50' />
                <input type="email"
                placeholder='Enter Email'
                autoComplete='none'
                class='rounded-lg bg-white px-4 py-2 border border-gray-300
                        focus:outline-yellow-500 focus:bg-yellow-50' />
                <input type="password"
                placeholder='Enter Password'
                autoComplete='new-password'
                class='rounded-lg bg-white px-4 py-2 border border-gray-300
                        focus:outline-yellow-500 focus:bg-yellow-50' />
                <button class='rounded-lg bg-violet-300 px-3 py-1
                            hover:bg-violet-400 hover:text-white
                            transition-all duration-300 ease-in-out'>Submit</button>
            </form>

            <nav class='bg-gray-300 flex flex-col md:flex-row md:gap-8 justify-center px-6 py-2 my-7'>
                <a href="*" class='hover:bg-white px-4 py-2 rounded-lg
                                    transition-all duration-300 ease-in-out'>Home</a>
                <a href="*" class='hover:bg-white px-4 py-2 rounded-lg
                                    transition-all duration-300 ease-in-out'>About</a>
                <a href="*" class='hover:bg-white px-4 py-2 rounded-lg
                                    transition-all duration-300 ease-in-out'>Contact</a>
            </nav>

            <div class='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div class='px-4 py-2 bg-white rounded shadow-lg w-1/2 text-center'>Cambodia</div>
                <div class='px-4 py-2 bg-white rounded shadow-lg w-1/2 text-center'>Vietnam</div>
                <div class='px-4 py-2 bg-white rounded shadow-lg w-1/2 text-center'>Philippines</div>
                <div class='px-4 py-2 bg-white rounded shadow-lg w-1/2 text-center'>Indonesia</div>
                <div class='px-4 py-2 bg-white rounded shadow-lg w-1/2 text-center'>Thailand</div>
                <div class='px-4 py-2 bg-white rounded shadow-lg w-1/2 text-center'>Singapore</div>
                <div class='px-4 py-2 bg-white rounded shadow-lg w-1/2 text-center'>Malaysia</div>
                <div class='px-4 py-2 bg-white rounded shadow-lg w-1/2 text-center'>Brunei</div>
                <div class='px-4 py-2 bg-white rounded shadow-lg w-1/2 text-center'>Myanmar</div>
                <div class='px-4 py-2 bg-white rounded shadow-lg w-1/2 text-center'>Laos</div>
                <div class='px-4 py-2 bg-white rounded shadow-lg w-1/2 text-center'>Timor-Leste</div>
            </div>

        </div>
    </>
  )
}

export default Home