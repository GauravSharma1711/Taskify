import React from 'react'
import {useState} from 'react'
import useNoteStore from '../store/noteStore.js'

const NoteModal = ({projectId}) => {

  const {createNote} = useNoteStore();

  
  const[formData,setFormData] = useState({
        content:''
  })

  const handleChange = (e)=>{
const {name,value} = e.target
setFormData((prevData)=>({
  ...prevData,
  [name]:value
}))
  }

  const handleSubmit = async(e)=>{
    try {
      e.preventDefault();
   await createNote(projectId,formData);
   setFormData({ content: '' });
document.getElementById('add_note_modal').close();

    } catch (error) {
      console.log("error addding subtask",error.message);
    }
  }


  return (
    <>
         <button
         className='w-full p-2 rounded-md flex items-center justify-center gap-2 cursor-pointer'
          onClick={() => document.getElementById('add_note_modal').showModal()}
         >
                
                 <h3>Add Note</h3>         
             </button>
   
   
    {/* Modal */}
         <dialog id="add_note_modal" className="modal"  >
           <div className="modal-box">
             <h3 className="font-bold text-xl mb-4">Add Note</h3>
   
              <form method="dialog">
     <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
   </form>
   
             <form 
             onSubmit={handleSubmit}
             method="dialog" className="flex flex-col gap-4">
   
             
              
   
       <input
                 type="text"
                 name='content'
                 value={formData.content}
                 onChange={handleChange}
                 placeholder="Content"
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

export default NoteModal