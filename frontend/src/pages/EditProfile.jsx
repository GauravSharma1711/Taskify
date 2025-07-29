import React from 'react'
import { MdEdit } from "react-icons/md";
import { useState } from 'react';
import useAuthStore from '../store/authStore';


const EditProfile = () => {


  const {updateProfile} = useAuthStore();

   const [formData,setFormData] = useState({
           username:'',
           email:'',
           fullName:''
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

     const res =  await updateProfile(formData);
     if(res){
       setFormData({
           username:'',
           email:'',
           fullName:''
      });
     }

   } catch (error) {
     console.log("error updating profile",error.message);
   }
     }

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

          <form
          onSubmit={handleSubmit}
          method="dialog" className="flex flex-col gap-4">

            <input
              type="text"
              name='username'
              value={formData.username}
              onChange={handleChange}
              placeholder="username"
              className="input input-bordered focus:outline-none w-full"
            />
          
              <input
              type="text"
               name='fullName'
              value={formData.fullName}
              onChange={handleChange}
              placeholder="FullName"
              className="input input-bordered focus:outline-none w-full"    
            />


    <input
              type="Email"
               name='email'
              value={formData.email}
              onChange={handleChange}
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