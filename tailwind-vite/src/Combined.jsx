import React from 'react'

const Combined = () => {
  return (
    <>
        <div class='bg-purple-50 min-h-screen'>
            <nav class='flex justify-center gap-8 py-2 px-8
                        bg-gray-200'>
                <a href="*" class='hover:bg-white px-4 py-2 
                                    text-2xl rounded-lg'>Home</a>
                <a href="*" class='hover:bg-white px-4 py-2 
                                    text-2xl rounded-lg'>About</a>
                <a href="*" class='hover:bg-white px-4 py-2 
                                    text-2xl rounded-lg'>Contact</a>
            </nav>

            <header class='m-7 flex items-center justify-center'>
                <h1 class='text-7xl text-center p-3 m-3'>Tailwind CSS</h1>
                <img src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F7n4bklxkjznnbwtz0zzi.jpeg" 
                alt="tailwind" class='w-1/2 m-6 rounded-2xl'/>
            </header>

            <div class='grid grid-cols-3 m-7 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                <div class='bg-white text-center py-7 
                rounded-2xl shadow-lg hover:scale-105
                transition-all duration-300 ease-in-out'>Utility-First Approach</div>
                <div class='bg-white text-center py-7 
                rounded-2xl shadow-lg hover:scale-105
                transition-all duration-300 ease-in-out'>Rapid Development</div>
                <div class='bg-white text-center py-7 
                rounded-2xl shadow-lg hover:scale-105
                transition-all duration-300 ease-in-out'>Highly Customizable</div>
            </div>

            <table class='w-full border border-gray-300 border-collapse
                        m-7 shadow-lg'>
                <thead>
                    <tr class='bg-purple-100'>
                        <th class='border border-gray-300 px-4 py-2 text-left'>Character</th>
                        <th class='border border-gray-300 px-4 py-2 text-left'>Superpower</th>
                        <th class='border border-gray-300 px-4 py-2 text-left'>Weakness</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class='odd:bg-white even:bg-gray-100 hover:bg-gray-200'>
                        <td class='border border-gray-300 px-4 py-2 text-left'>Caffeinated Coder</td>
                        <td class='border border-gray-300 px-4 py-2 text-left'>Writes bug-free code at 2 AM</td>
                        <td class='border border-gray-300 px-4 py-2 text-left'> Runs on coffee only</td>
                    </tr>
                    <tr class='odd:bg-white even:bg-gray-100 hover:bg-gray-200'>
                        <td class='border border-gray-300 px-4 py-2 text-left'>Sleepy Designer</td>
                        <td class='border border-gray-300 px-4 py-2 text-left'>Pixel-perfect layouts</td>
                        <td class='border border-gray-300 px-4 py-2 text-left'>Deadlines before noon</td>
                    </tr>
                    <tr class='odd:bg-white even:bg-gray-100 hover:bg-gray-200'>
                        <td class='border border-gray-300 px-4 py-2 text-left'>Keyboard Ninja</td>
                        <td class='border border-gray-300 px-4 py-2 text-left'>Types without looking</td>
                        <td class='border border-gray-300 px-4 py-2 text-left'>Loud mechanical keyboards</td>
                    </tr>
                    <tr class='odd:bg-white even:bg-gray-100 hover:bg-gray-200'>
                        <td class='border border-gray-300 px-4 py-2 text-left'>Debug Wizard</td>
                        <td class='border border-gray-300 px-4 py-2 text-left'>Finds bugs instantly</td>
                        <td class='border border-gray-300 px-4 py-2 text-left'>Cannot explain how</td>
                    </tr>
                    <tr class='odd:bg-white even:bg-gray-100 hover:bg-gray-200'>
                        <td class='border border-gray-300 px-4 py-2 text-left'>StackOverflow Sage</td>
                        <td class='border border-gray-300 px-4 py-2 text-left'>Knows every error</td>
                        <td class='border border-gray-300 px-4 py-2 text-left'>Internet outage</td>
                    </tr>
                </tbody>
            </table>

            <form class='rounded-lg flex flex-col items-center gap-2 
                    bg-violet-100 w-1/3 p-8 shadow-lg mx-20'>
                        <h1 class='text-3xl'>Fill Details</h1>
                <input type="text"
                placeholder='Enter Name'
                class='rounded-lg bg-white px-4 py-2 border border-gray-300
                        focus:outline-yellow-500 focus:bg-yellow-50'/>
                <input type="text"
                placeholder='Enter Email'
                class='rounded-lg bg-white px-4 py-2 border border-gray-300
                        focus:outline-yellow-500 focus:bg-yellow-50'/>
                <input type="text"
                placeholder='Enter Phome Number'
                class='rounded-lg bg-white px-4 py-2 border border-gray-300
                        focus:outline-yellow-500 focus:bg-yellow-50'/>
                <input type="text"
                placeholder='Enter Address'
                class='rounded-lg bg-white px-4 py-2 border border-gray-300
                        focus:outline-yellow-500 focus:bg-yellow-50'/>
                <button  class='rounded-lg bg-violet-300 px-3 py-1
                            hover:bg-violet-400 hover:text-white
                            transition-all duration-300 ease-in-out'>Submit</button>
            </form>
        </div>
    </>
  )
}

export default Combined