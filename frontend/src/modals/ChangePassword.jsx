import React, { useState } from 'react'
import { MdEdit } from "react-icons/md";
import useAuthStore from '../store/authStore.js';

const ChangePassword = () => {

     const {changeCurrentPassword} = useAuthStore();

     const [formData,setFormData] = useState({
        currentPassword:'',
        newPassword:''
     })

       const handleChange = (e)=>{
const {name,value} = e.target;
setFormData((prevData)=>({
  ...prevData,
  [name]:value
}))
  }


  

     const handleSubmit = async(e)=>{
              try {
            e.preventDefault();
      await changeCurrentPassword(formData);
     setFormData({
  currentPassword: '',
  newPassword: ''
});

   } catch (error) {
     console.log("error updating password",error.message);
   }
     }

  return (
      <>
          <button
          className=' btn btn-wide bg-base-100 '
           onClick={() => document.getElementById('update_password_modal').showModal()}
          >
                 <MdEdit />
                  <h3>Update Password</h3>         
              </button>
    
    
     {/* Modal */}
          <dialog id="update_password_modal" className="modal"  >
            <div className="modal-box">
              <h3 className="font-bold text-xl mb-4">Update Password</h3>
    
               <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    
              <form
               onSubmit={handleSubmit}
              method="dialog" className="flex flex-col gap-4">
    
                <input
                  type="text"
                  name='currentPassword'
                  value={formData.currentPassword}
                  onChange={handleChange}
                  placeholder="currentPassword"
                  className="input input-bordered focus:outline-none w-full"
                />
              
                  <input
                  type="text"
                  name='newPassword'
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="newPassword"
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

export default ChangePassword