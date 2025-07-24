import React from 'react'

const Project = () => {
  return (
    <div className=' flex flex-col gap-4 bg-base-300 w-full  h-[540px] overflow-y-scroll ' >


   <div className=' flex flex-col gap-2 px-8 py-4 m-4' >
    <h1 className=' font-bold text-2xl' >Project Name</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
   </div>


   <div className=' flex flex-col border-2 mx-4 my-4 border-white   ' >

    <div className=' p-2 flex items-center justify-between mx-4  '>
        <div>
    <h2 className=' font-bold text-2xl'>Tasks</h2>
        </div>
        <div>
    <button>Add Task</button>
        </div>
    </div>

      <div className='grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-6 p-8'>

    
        <div className='card bg-base-100 w-full rounded-lg shadow-lg transform transition-transform hover:scale-105'>
          <div className="card-body flex flex-col items-center justify-center p-6">
            <h2 className="card-title text-xl font-semibold text-blue-400 mb-2">Total</h2>
            <span className='font-bold text-5xl text-white'>7</span>
          </div>
        </div>

        
        <div className='card bg-base-100 w-full rounded-lg shadow-lg transform transition-transform hover:scale-105'>
          <div className="card-body flex flex-col items-center justify-center p-6">
            <h2 className="card-title text-xl font-semibold text-green-400 mb-2">Completed</h2>
            <span className='font-bold text-5xl text-white'>4</span>
          </div>
        </div>

      
        <div className='card bg-base-100 w-full rounded-lg shadow-lg transform transition-transform hover:scale-105'>
          <div className="card-body flex flex-col items-center justify-center p-6">
            <h2 className="card-title text-xl font-semibold text-red-400 mb-2">Remaining</h2>
            <span className='font-bold text-5xl text-white'>3</span>
          </div>
        </div>

       
        <div className='card bg-base-100 w-full rounded-lg shadow-lg transform transition-transform hover:scale-105'>
          <div className="card-body flex flex-col items-center justify-center p-6">
            <h2 className="card-title text-xl font-semibold text-yellow-400 mb-2">In Progress</h2>
            <span className='font-bold text-5xl text-white'>2</span>
          </div>
        </div>

      
        <div className='card bg-base-100 w-full rounded-lg shadow-lg transform transition-transform hover:scale-105'>
          <div className="card-body flex flex-col items-center justify-center p-6">
            <h2 className="card-title text-xl font-semibold text-purple-400 mb-2">On Hold</h2>
            <span className='font-bold text-5xl text-white'>1</span>
          </div>
        </div>

       
        <div className='card bg-base-100 w-full rounded-lg shadow-lg transform transition-transform hover:scale-105'>
          <div className="card-body flex flex-col items-center justify-center p-6">
            <h2 className="card-title text-xl font-semibold text-teal-400 mb-2">Archived</h2>
            <span className='font-bold text-5xl text-white'>0</span>
          </div>
        </div>

      </div>
   </div>


 <div className=' flex flex-col border-2 mx-4 my-4 border-white   ' >

<div className=' p-2 flex items-center justify-between mx-4  '>
        <div>
    <h2 className=' font-bold text-2xl'>Notes</h2>
        </div>
        <div>
    <button>Add Note</button>
        </div>
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

 </div>


    </div>
  )
}

export default Project