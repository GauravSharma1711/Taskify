import React from 'react'
import Bar from '../components/Bar'
import SubtaskModal from '../modals/SubtaskModal'
import Update from '../modals/Update'

const Task = () => {
  return (
   <div className=' flex flex-col gap-4 bg-base-300 w-full  h-[540px] overflow-y-scroll ' >

 <div className=' flex justify-between px-8 py-4 m-4' >
    <div className=' flex flex-col gap-2'>
    <h1 className=' font-bold text-3xl' >Task Name</h1>
    <p className=' font-light' >Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
     <p className='text-sm text-gray-400 mt-1'>Assigned to: <span className='font-medium text-white'>John Doe</span></p>
    </div>
    <div className=' flex items-center gap-2'>
         <Update/>
        <div className="badge badge-success">Completed</div>
        
    </div>
   </div>


<div className=' flex flex-col border-2 mx-4 my-4 border-white   ' >
<div className=' p-2 flex items-center justify-between mx-4  '>
        <div>
    <h2 className=' font-bold text-2xl'>Subtask</h2>
        </div>
        <div>
   <SubtaskModal/>
        </div>
    </div>
<Bar/>
<Bar/>
<Bar/>
<Bar/>
 </div>

    </div>
  )
}

export default Task