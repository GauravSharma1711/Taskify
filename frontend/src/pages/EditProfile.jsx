import React from 'react'
import { MdEdit } from "react-icons/md";


const EditProfile = () => {
  return (

    <>
      <button
      className='w-full border-2 border-white p-2 rounded-md flex items-center justify-center gap-2 cursor-pointer'
       onClick={() => document.getElementById('update_profile_modal').showModal()}
      >
             <MdEdit />
              <h3>Edit Profile</h3>         
          </button>


 {/* Modal */}
      <dialog id="update_profile_modal" className="modal"  >
        <div className="modal-box">
          <h3 className="font-bold text-xl mb-4">Update Profile</h3>

           <form method="dialog">
  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
</form>

          <form method="dialog" className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="username"
              className="input input-bordered focus:outline-none w-full"
            />
          
              <input
              type="text"
              placeholder="FullName"
              className="input input-bordered focus:outline-none w-full"    
            />


    <input
              type="Email"
              placeholder="Email"
              className="input input-bordered focus:outline-none w-full"       
            />

            <div className="modal-action">
              <button className="btn border-slate-700 bg-base-200 w-full">update</button>
            </div>
          </form>
        </div>
      </dialog>
      </>
  )
}

export default EditProfile