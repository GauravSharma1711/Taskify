import React from 'react';
import { MdDelete, MdEdit } from "react-icons/md";

import UpdateNote from '../modals/UpdateNote';

const NoteBar = ({note,onDelete}) => {

  

  return (
    <div className='flex justify-between py-2 my-2 mx-6 border-2 border-white bg-base-200'>
      <div className='m-2'>
        <p className=' text-white' >{note.content}</p>
      </div>

      {/* Action buttons: wrap both in buttons for consistency */}
      <div className='flex gap-2 items-center m-2'>
        <UpdateNote
            note={note}
         />

        <button
          onClick={() => onDelete(note._id)}
        className='p-2 rounded-md flex items-center justify-center cursor-pointer hover:bg-base-300'>
          <MdDelete size={18} />
        </button>
      </div>
    </div>
  );
};

export default NoteBar;
