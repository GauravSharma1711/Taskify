import React, { useState } from 'react'
import { MdEdit } from "react-icons/md";
import useTaskStore from '../store/taskStore.js'

const UpdateTask = ({subTaskId}) => {

  const {updateSubTask} = useTaskStore();

  const [formData, setFormData] = useState({
    title: '',
    description:''
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     await updateSubTask(subTaskId,formData);
      setFormData({
        title: '',
        description:''
      });
      document.getElementById('update_modal').close();
    } catch (error) {
      console.log("error updating data", error);
    }
  };

  return (
    <>
      <button
        className='w-full p-2 rounded-md flex items-center justify-center gap-2 cursor-pointer'
        onClick={() => document.getElementById('updateTask_modal').showModal()}
      >
        <MdEdit size={18} />
      </button>

      {/* Modal */}
      <dialog id="updateTask_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-xl mb-4">Update</h3>

          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>

          <form
            onSubmit={handleSubmit}
            method="dialog"
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name='title'
              value={formData.title}
              onChange={handleChange}
              placeholder="Title"
              className="input input-bordered focus:outline-none w-full"
            />

  <input
              type="text"
              name='description'
              value={formData.description}
              onChange={handleChange}
              placeholder="Title"
              className="input input-bordered focus:outline-none w-full"
            />
          
            <div className="modal-action">
              <button className="btn border-slate-700 bg-base-200 w-full">Update</button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default UpdateTask;
