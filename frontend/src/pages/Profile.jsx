import React from 'react'
import EditProfile from './EditProfile';

const Profile = () => {
  return (
    <div className='bg-black min-h-screen w-full text-white font-sans'>

      <div className='border-b-2 border-white py-8 px-4 flex flex-col items-center lg:items-start justify-center rounded-b-lg'>
        <h1 className='font-bold text-4xl mb-2'>My Profile</h1>
        <p className='text-lg text-gray-300'>Mange your account</p>
      </div>

      <div className='grid grid-cols-1 place-items-center  lg:grid-cols-2 gap-6 p-8'>

     
    
        <div className='card bg-base-200 w-full rounded-lg shadow-lg transform transition-transform hover:scale-105'>
          <div className="card-body flex flex-col items-center justify-center p-6">
            <h2 className="card-title text-xl font-semibold text-blue-400 mb-2">username</h2>
            <span className='font-bold text-5xl text-white'>7</span>
          </div>
        </div>

        
        <div className='card bg-base-200 w-full rounded-lg shadow-lg transform transition-transform hover:scale-105'>
          <div className="card-body flex flex-col items-center justify-center p-6">
            <h2 className="card-title text-xl font-semibold text-green-400 mb-2">email</h2>
            <span className='font-bold text-5xl text-white'>4</span>
          </div>
        </div>

      
        <div className='card bg-base-200 w-full rounded-lg shadow-lg transform transition-transform hover:scale-105'>
          <div className="card-body flex flex-col items-center justify-center p-6">
            <h2 className="card-title text-xl font-semibold text-red-400 mb-2">fullname</h2>
            <span className='font-bold text-5xl text-white'>3</span>
          </div>
        </div>

       
        <div className='card bg-base-200 w-full rounded-lg shadow-lg transform transition-transform hover:scale-105'>
          <div className="card-body flex flex-col items-center justify-center p-6">
            <h2 className="card-title text-xl font-semibold text-yellow-400 mb-2">role</h2>
            <span className='font-bold text-5xl text-white'>2</span>
          </div>
        </div>

      


      </div>


<EditProfile/>


    </div>
  
  )
}

export default Profile