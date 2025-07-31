import React, { useEffect } from 'react'
import NoteBar from './NoteBar.jsx'
import { Link } from 'react-router-dom'
import TaskModal from '../modals/TaskModal'
import NoteModal from '../modals/NoteModal'
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import useProjectStore from '../store/projectStore';
import useTaskStore from '../store/taskStore'
import useNoteStore from '../store/noteStore'
import { useParams } from 'react-router-dom';
import useNoteActions from '../hooks/deleteNote.js'
import useAuthStore from '../store/authStore.js'

const Project = () => {

  const {handleDeleteNote} = useNoteActions()
    const { projectId } = useParams();

    const {getAllUsers,allUsers} = useAuthStore();
    const {selectedProject,fetchProjectById} = useProjectStore();
    const {getAllTasks,allTasks, deleteTask } = useTaskStore();
    const {allNotes,getAllNotes} = useNoteStore();

    useEffect(() => {
    fetchProjectById(projectId);
    }, [fetchProjectById,projectId])

    useEffect(() => {
  getAllTasks(projectId);
}, [getAllTasks, projectId]);

  useEffect(() => {
 getAllNotes(projectId)
}, [getAllNotes,projectId])

useEffect(() => {
 getAllUsers()
}, [getAllUsers,allUsers])


    

  return (
    <div className=' flex flex-col gap-4 bg-base-300 w-full  h-[540px] overflow-y-scroll ' >


  <div className=' flex justify-between px-8 py-4 m-4' >
    <div className=' flex flex-col gap-2'>
    <h1 className=' font-bold text-3xl' >{selectedProject?.name}</h1>
    <p className=' font-light text-2xl' >{selectedProject?.description}</p>
    </div>
    <div className=' flex items-center gap-2'>
    {
      selectedProject?.isCompleted ? 
      (<div className="badge badge-success">Completed</div>) 
      :
       (<div className="badge badge-error">Not Completed</div>)
    }
       
        
    </div>
   </div>

<div className='flex '>

{/* left */}
<div className=' w-2/3' >

   <div className=' flex flex-col border-2 mx-4 my-4  border-white   ' >

    <div className=' p-2 flex items-center justify-between mx-4  '>
        <div>
    <h2 className=' font-bold text-2xl'>Tasks</h2>
        </div>
        <div>
    <TaskModal  />
        </div>
    </div>

      <div className='grid grid-cols-1 place-items-center lg:grid-cols-2  gap-6 p-8'>

{

allTasks?.map((task)=>(
 <Link
  key={task?._id}
   to={`/task/${task._id}`} 
   className=' relative card bg-base-100 w-full rounded-lg shadow-lg transform transition-transform hover:scale-105'>
          <span
          onClick={(e)=>{
            e.preventDefault();
            e.stopPropagation();
            deleteTask(task._id)
          }}
          className='absolute top-2 right-2 cursor-pointer' ><MdDelete size={22} /></span>

          <div className="card-body flex flex-col items-center justify-center p-6">
            <h2 className="card-title text-xl font-semibold text-blue-400 mb-2">{task?.title}</h2>
            <span className='font-bold text-1xl text-white'>{task?.description}</span>
          </div>
        </Link>
)
)

}
    
       

      </div>
   </div>

{/* note */}
 <div className=' flex flex-col border-2 mx-4 my-4  border-white   ' >
<div className=' p-2 flex items-center justify-between mx-4  '>
        <div>
    <h2 className=' font-bold text-2xl'>Notes</h2>
        </div>
        <div>
    <NoteModal projectId={projectId} />
        </div>
    </div>
    {
      allNotes.map(note=>{
       return <NoteBar 
       key={note._id}
       note={note}
        onDelete={(noteId) => handleDeleteNote(noteId, projectId)}
          />
 })
    }


 </div>

</div>

{/* right */}
<div className='w-1/3 m-2 flex flex-col' >
 

 <div className='flex  flex-col items-center border-2 mx-2 my-4  border-white'  >
  <h3 className=' text-2xl py-2' >Members</h3>
   
    <div className=' w-72 flex px-2  py-2 my-2 mx-2 items-center justify-between bg-slate-950 border-2  rounded-md'>
                  <span>gaurav sharma</span>
                  <MdDelete className="cursor-pointer" />
            </div>

                 
            </div>
 



{/* add members */}
 <div className='flex  flex-col items-center border-2 mx-2 my-4  border-white'  >
  <h3 className=' text-2xl py-2' >Add Members</h3>
            {
  allUsers.map(user => (
    <div
     key={user._id  }
      className=' w-72 flex px-2  py-2 my-2 mx-2 items-center justify-between bg-slate-950 border-2  rounded-md'>
      <span className="text-white">{user.fullName}</span>
      <IoMdAdd className="cursor-pointer" />
    </div>
  ))
}
 </div>



</div>

    </div>

        </div>
  )
}

export default Project