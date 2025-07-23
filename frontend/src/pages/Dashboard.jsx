import React from 'react'
import { IoCreateSharp } from "react-icons/io5";

const Dashboard = () => {
  return (
    <div className=' bg-black min-h-screen w-full' >
       <div className=' border-2 border-white p-4 flex flex-col items-start justify-center '>
           <h1 className=' font-bold text-2xl' >Projects Overview</h1>
           <p>Manage your project efficiently</p>
       </div>


       <div className=' grid grid-rows-1 grid-cols-3 gap-2 p-8'>
           
    <div className='card bg-base-200 w-66 shadow-sm ' >
 <div className="card-body flex flex-col items-center justify-center">
    <h2 className="card-title">Total</h2>
    <span className=' font-bold text-2xl'>7</span>
  </div>
   </div>


     <div className='card bg-base-200 w-66 shadow-sm ' >
 <div className="card-body flex flex-col items-center justify-center">
    <h2 className="card-title">Completed</h2>
    <span className=' font-bold text-2xl'>4</span>
  </div>
   </div>


 <div className='card bg-base-200 w-66 shadow-sm ' >
 <div className="card-body flex flex-col items-center justify-center">
    <h2 className="card-title">Remaining</h2>
    <span className=' font-bold text-2xl'>3</span>
  </div>
   </div>


           
           

       </div>


       <div className=' border-2 border-white p-2 rounded-md flex items-center justify-center cursor-pointer '>
           <IoCreateSharp />
           <h3>Create Project</h3>         
       </div>

    </div>
  )
}

export default Dashboard