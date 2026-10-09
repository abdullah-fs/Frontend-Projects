import React from 'react'
import abdullahImage from  './assets/abdullah.jpeg';

const App = () => {
  const name = "Abdullah Mahmood";
  const role = "Frontend Developer";
  const city = "Peshawar";

  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center flex-col'>

      <div className='bg-white rounded-xl p-8 shadow-md w-80 text-center'>

        <img
          src={abdullahImage}
          alt="Abdullah Mahmood"
          className='w-40 h-40 rounded-full object-cover mx-auto mb-4'
        />

        <h1 className='text-2xl font-bold text-gray-800'>{name}</h1>
        <p className='text-gray-600 text-lg'>{role}</p>
        <p className='text-sm text-gray-600 mt-3 leading-relaxed'>I build modern and responsive websites using React.</p>
        <p className='text-sm mt-2 text-gray-500'>{city}</p>

        <div className='flex justify-center gap-4 mt-4 text-gray-800'>
          <a href="#" className=' hover:underline'>GitHub</a>
          <a href="#" className=' hover:underline'>LinkedIn</a>
        </div>

        <a href="mailto:your-email@example.com" className='inline-block mt-6 bg-gray-600 text-white px-5 py-2 rounded-lg hover:bg-gray-800'>Contact Me</a>

      </div>

    </div>
  )
}

export default App