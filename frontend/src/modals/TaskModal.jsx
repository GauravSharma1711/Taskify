import React from 'react'

const TaskModal = () => {
  return (
    <>
         <button
         className='w-full  p-2 rounded-md flex items-center justify-center gap-2 cursor-pointer'
          onClick={() => document.getElementById('add_task_modal').showModal()}
         >
                <h3>Add Task</h3>         
             </button>
   
   
    {/* Modal */}
         <dialog id="add_task_modal" className="modal"  >
           <div className="modal-box">
             <h3 className="font-bold text-xl mb-4">Add Task</h3>
   
              <form method="dialog">
     <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
   </form>
   
             <form method="dialog" className="flex flex-col gap-4">
   
               <input
                 type="text"
                 placeholder="Title"
                 className="input input-bordered focus:outline-none w-full"
               />
             
                 <input
                 type="text"
                 placeholder="Description"
                 className="input input-bordered focus:outline-none w-full"    
               />
   
                <input
                 type="text"
                 placeholder="AssignedTo"
                 className="input input-bordered focus:outline-none w-full"    
               />
      
   
               <div className="modal-action">
                 <button className="btn border-slate-700 bg-base-200 w-full">Add</button>
               </div>
             </form>
           </div>
         </dialog>
         </>
  )
}

export default TaskModal