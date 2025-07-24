import React from 'react'
import CreateProject from './CreateProject'



const Dashboard = () => {
  return (
    <div className=' bg-black min-h-screen w-full' >
       <div className=' border-2 border-white p-4 flex flex-col items-center lg:items-start justify-center '>
           <h1 className=' font-bold text-2xl' >Projects Overview</h1>
           <p>Manage your project efficiently</p>
       </div>


      <div className='grid grid-cols-1 lg:grid-cols-3 place-items-center gap-4 p-8'>
  <div className='card bg-base-200 w-full max-w-xs shadow-sm'>
    <div className="card-body flex flex-col items-center justify-center">
      <h2 className="card-title">Total</h2>
      <span className='font-bold text-2xl'>7</span>
    </div>
  </div>

  <div className='card bg-base-200 w-full max-w-xs shadow-sm'>
    <div className="card-body flex flex-col items-center justify-center">
      <h2 className="card-title">Completed</h2>
      <span className='font-bold text-2xl'>4</span>
    </div>
  </div>

  <div className='card bg-base-200 w-full max-w-xs shadow-sm'>
    <div className="card-body flex flex-col items-center justify-center">
      <h2 className="card-title">Remaining</h2>
      <span className='font-bold text-2xl'>3</span>
    </div>
  </div>
</div>


     <CreateProject/>

    </div>
  )
}

export default Dashboard