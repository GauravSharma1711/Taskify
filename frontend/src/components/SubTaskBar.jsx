import React from 'react';
import { MdDelete, MdEdit } from "react-icons/md";

import UpdateSubTask from '../modals/UpdateSubtask';


const SubTaskBar = ({subtask,content,onDelete}) => {

  return (
    <div className='flex justify-between py-2 my-2 mx-6 border-2 border-white bg-base-200'>
      <div className='m-2'>
        <p className=' text-white' >{content}</p>
      </div>

      {/* Action buttons: wrap both in buttons for consistency */}
      <div className='flex gap-2 items-center m-2'>
        <UpdateSubTask
            subTask={subtask}
            
         />

        <button
          onClick={() => onDelete(subtask._id)}
        className='p-2 rounded-md flex items-center justify-center cursor-pointer hover:bg-base-300'>
          <MdDelete size={18} />
        </button>
      </div>
    </div>
  );
};

export default SubTaskBar;
