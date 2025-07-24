import React from 'react'
import { MdEdit } from "react-icons/md";
const Update = () => {
  return (
    <>
         <button
         className='w-full  p-2 rounded-md flex items-center justify-center gap-2 cursor-pointer'
          onClick={() => document.getElementById('update_modal').showModal()}
         >
                 <MdEdit size={18} />       
             </button>
   
   
    {/* Modal */}
         <dialog id="update_modal" className="modal"  >
           <div className="modal-box">
             <h3 className="font-bold text-xl mb-4">Update</h3>
   
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
   
   
      
   
               <div className="modal-action">
                 <button className="btn border-slate-700 bg-base-200 w-full">Add</button>
               </div>
             </form>
           </div>
         </dialog>
         </>
  )
}

export default Update