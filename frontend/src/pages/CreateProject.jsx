import React, { useState } from 'react';
import { IoCreateSharp } from "react-icons/io5";

import useProjectStore from '../store/projectStore.js';
import { useNavigate } from 'react-router-dom';

const CreateProject = () => {

  const navigate = useNavigate();

    const {createProject} = useProjectStore();

    const [formData , setFormData] = useState({
      name:'',
      description:'',
    })

    const handleChange = (e)=>{
      const {name,value} = e.target
      setFormData((prevData)=>({
        ...prevData,
        [name]:value
      })
)
    }

    const handleSubmit = async(e)=>{
      try {
        e.preventDefault();
await createProject(formData);
document.getElementById('create_project_modal').close()
setFormData({
  name:'',
  description:''
})
navigate('/myprojects')
      } catch (error) {
         console.log("error creating project",error.message);
      }
    }



  return (
    <>
      {/* Trigger Button */}
      <button

        className='w-full border-2 border-white p-2 rounded-md flex items-center justify-center gap-2 cursor-pointer'
        onClick={() => document.getElementById('create_project_modal').showModal()}
      >
        <IoCreateSharp />
        <h3>Create Project</h3>
      </button>

      {/* Modal */}
      <dialog id="create_project_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-xl mb-4">Create New Project</h3>

           <form method="dialog">
  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
</form>



          <form 
          onSubmit={handleSubmit}
          method="dialog" className="flex flex-col gap-4">

            <input
              type="text"
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder="Project Name"
              className="input input-bordered focus:outline-none  
 w-full"
              required
            />


            <textarea
            name='description'
            value={formData.description}
            onChange={handleChange}
              placeholder="Project Description"
              className="textarea textarea-bordered focus:outline-none 
 w-full"
              required
            ></textarea>
            <div className="modal-action">
              <button className="btn border-slate-700 bg-base-200 w-full">Create</button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default CreateProject;
