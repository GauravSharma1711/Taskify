

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import useProjectStore from '../store/projectStore';

const MyProjects = () => {


  const {fetchMyProjects,myProjects,deleteProject} = useProjectStore()

useEffect(() => {
  fetchMyProjects();
   // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);


  return (
  
    <div className='bg-black min-h-screen w-full text-white font-sans'>

      <div className='border-b-2 border-white py-8 px-4 flex flex-col items-center lg:items-start justify-center rounded-b-lg'>
        <h1 className='font-bold text-4xl mb-2'>Projects</h1>
        <p className='text-lg text-gray-300'>All your projects listed below</p>
      </div>

      <div className='grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-6 p-8'>
  {myProjects.map(project => (
    <Link
      key={project._id}
      to={`/project/${project._id}`}
      className='relative card bg-base-200 w-full rounded-lg shadow-lg transform transition-transform hover:scale-105'
    >
      <span className='absolute top-2 right-2 cursor-pointer'>
        <MdDelete 
        
        onClick={(e)=>{
          e.preventDefault();
          e.stopPropagation();
          deleteProject(project._id)
        }}
        
        size={22} />
      </span>
      <div className="card-body flex flex-col items-center justify-center p-6">
        <h2 className="card-title text-xl font-semibold text-blue-400 mb-2">
          {project.name}
        </h2>
        <span className='font-bold text-2xl text-white'>
          {project.description}
        </span>
      </div>
    </Link>
  ))}
      </div>
      
    </div>
  );
};

export default MyProjects;
