import React from 'react';
import { MdDelete, MdEdit } from "react-icons/md";
import Update from '../modals/Update';

const Bar = () => {
  return (
    <div className='flex justify-between py-2 my-2 mx-6 border-2 border-white bg-base-200'>
      <div className='m-2'>
        <p>Some description here</p>
      </div>

      {/* Action buttons: wrap both in buttons for consistency */}
      <div className='flex gap-2 items-center m-2'>
        <Update />

        <button className='p-2 rounded-md flex items-center justify-center cursor-pointer hover:bg-base-300'>
          <MdDelete size={18} />
        </button>
      </div>
    </div>
  );
};

export default Bar;
