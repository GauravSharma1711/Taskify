import React from 'react'
import Bar from './Bar'
import { Link } from 'react-router-dom'
import TaskModal from '../modals/TaskModal'
import NoteModal from '../modals/NoteModal'
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

const Project = () => {
  return (
    <div className=' flex flex-col gap-4 bg-base-300 w-full  h-[540px] overflow-y-scroll ' >


   <div className=' flex flex-col gap-2 px-8 py-4 m-4' >
    <h1 className=' font-bold text-2xl' >Project Name</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
   </div>

<div className='flex '>

{/* left */}
<div className=' w-2/3' >

   <div className=' flex flex-col border-2 mx-4 my-4  border-white   ' >

    <div className=' p-2 flex items-center justify-between mx-4  '>
        <div>
    <h2 className=' font-bold text-2xl'>Tasks</h2>
        </div>
        <div>
    <TaskModal/>
        </div>
    </div>

      <div className='grid grid-cols-1 place-items-center lg:grid-cols-2  gap-6 p-8'>

    
        <Link to={'/task'} className=' relative card bg-base-100 w-full rounded-lg shadow-lg transform transition-transform hover:scale-105'>
          <span className=' absolute top-2 right-2 cursor-pointer' ><MdDelete size={22} /></span>
          <div className="card-body flex flex-col items-center justify-center p-6">
            <h2 className="card-title text-xl font-semibold text-blue-400 mb-2">Total</h2>
            <span className='font-bold text-5xl text-white'>7</span>
          </div>
        </Link>

        
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

 <div className=' flex flex-col border-2 mx-4 my-4  border-white   ' >
<div className=' p-2 flex items-center justify-between mx-4  '>
        <div>
    <h2 className=' font-bold text-2xl'>Notes</h2>
        </div>
        <div>
    <NoteModal/>
        </div>
    </div>
<Bar/>
<Bar/>
<Bar/>
<Bar/>
 </div>

</div>

{/* right */}
<div className='w-1/3 m-2 flex flex-col' >
 
 <div className='flex  flex-col items-center border-2 mx-2 my-4  border-white'  >
  <h3 className=' text-2xl py-2' >Members</h3>
            <div className=' w-72 flex px-2  py-2 my-2 mx-2 items-center justify-between bg-slate-950 border-2  rounded-md'>
                  <span>gaurav sharma</span>
                  <MdDelete />
            </div>

<div className=' w-72 flex px-2  py-2 my-2 mx-2 items-center justify-between bg-slate-950 border-2  rounded-md'>
                  <span>gaurav sharma</span>
                  <MdDelete />
            </div>

            <div className=' w-72 flex px-2  py-2 my-2 mx-2 items-center justify-between bg-slate-950 border-2  rounded-md'>
                  <span>gaurav sharma</span>
                  <MdDelete />
            </div>

 </div>

 





 <div className='flex flex-col items-center border-2 mx-4 my-4  border-white'  >
<h3 className=' text-2xl py-2' > Add Members</h3>
            <div className=' w-72 flex px-2  py-2 my-2 mx-2 items-center justify-between bg-slate-950 border-2  rounded-md'>
                  <span>gaurav sharma</span>
                  <IoMdAdd />
            </div>

<div className=' w-72 flex px-2  py-2 my-2 mx-2 items-center justify-between bg-slate-950 border-2  rounded-md'>
                  <span>gaurav sharma</span>
                  <IoMdAdd />
            </div>

            <div className=' w-72 flex px-2  py-2 my-2 mx-2 items-center justify-between bg-slate-950 border-2  rounded-md'>
                  <span>gaurav sharma</span>
                 <IoMdAdd />
            </div>
 </div>



</div>

    </div>

        </div>
  )
}

export default Project