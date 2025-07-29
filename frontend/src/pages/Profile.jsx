import React from 'react'
import EditProfile from './EditProfile';
import useAuthStore from '../store/authStore.js'
import { useEffect } from 'react';
import ChangePassword from '../modals/changePassword.jsx';

const Profile = () => {

  const {authUser,getCurrentUser} = useAuthStore();

  useEffect(() => {
   getCurrentUser();
     // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  


  return (
    <div className='bg-black min-h-screen w-full text-white font-sans'>
<>
      <div className='border-b-2 border-white py-2 px-2 flex items-center lg:items-start justify-between rounded-b-lg'>
        <div className=' flex flex-col justify-start' >
        <h1 className='font-bold text-4xl mb-2'>My Profile</h1>
        <p className='text-lg text-gray-300'>Mange your account</p>
        </div>
        <div className=' mt-4'>
  <ChangePassword/>
        </div>
      </div>
</>
      <div className='grid grid-cols-1 place-items-center  lg:grid-cols-2 gap-6 p-8'>

     
    
        <div className='card bg-base-200 w-full rounded-lg shadow-lg transform transition-transform hover:scale-105'>
          <div className="card-body flex flex-col items-center justify-center p-6">
            <h2 className="card-title text-xl font-semibold text-blue-400 mb-2">username</h2>
            <span className='font-bold text-2xl text-white'>{authUser?.username}</span>
          </div>
        </div>

        
        <div className='card bg-base-200 w-full rounded-lg shadow-lg transform transition-transform hover:scale-105'>
          <div className="card-body flex flex-col items-center justify-center p-6">
            <h2 className="card-title text-xl font-semibold text-green-400 mb-2">email</h2>
            <span className='font-bold text-2xl text-white'>{authUser?.email}</span>
          </div>
        </div>

      
        <div className='card bg-base-200 w-full rounded-lg shadow-lg transform transition-transform hover:scale-105'>
          <div className="card-body flex flex-col items-center justify-center p-6">
            <h2 className="card-title text-xl font-semibold text-red-400 mb-2">fullname</h2>
            <span className='font-bold text-2xl text-white'>{authUser?.fullName}</span>
          </div>
        </div>

       
        <div className='card bg-base-200 w-full rounded-lg shadow-lg transform transition-transform hover:scale-105'>
          <div className="card-body flex flex-col items-center justify-center p-6">
            <h2 className="card-title text-xl font-semibold text-yellow-400 mb-2">role</h2>
            <span className='font-bold text-2xl text-white'>{authUser?.role}</span>
          </div>
        </div>

      


      </div>


<EditProfile/>


    </div>
  
  )
}

export default Profile