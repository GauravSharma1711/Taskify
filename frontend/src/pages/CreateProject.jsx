import React from 'react';
import { IoCreateSharp } from "react-icons/io5";

const CreateProject = () => {
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



          <form method="dialog" className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Project Name"
              className="input input-bordered focus:outline-none  
 w-full"
              required
            />
            <textarea
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
