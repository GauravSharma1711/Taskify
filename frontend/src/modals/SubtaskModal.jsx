import React from 'react'

const SubtaskModal = () => {
  return (
    <>
         <button
         className='w-full p-2 rounded-md flex items-center justify-center gap-2 cursor-pointer'
          onClick={() => document.getElementById('add_subtask_modal').showModal()}
         >
               
                 <h3>Add Subtask</h3>         
             </button>
   
   
    {/* Modal */}
         <dialog id="add_subtask_modal" className="modal"  >
           <div className="modal-box">
             <h3 className="font-bold text-xl mb-4">Add Subtask</h3>
   
              <form method="dialog">
     <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
   </form>
   
             <form method="dialog" className="flex flex-col gap-4">
   
              
                 <input
                 type="text"
                 placeholder="Title"
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

export default SubtaskModal