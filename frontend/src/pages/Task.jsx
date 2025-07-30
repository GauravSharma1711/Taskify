import React from 'react'
import SubTaskBar from '../components/SubTaskBar.jsx'
import SubtaskModal from '../modals/SubtaskModal'
// import UpdateTask from '../modals/UpdateTask.jsx'
import useTaskStore from '../store/taskStore.js'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import useSubtaskActions from '../hooks/deleteSubtask.js'

const Task = () => {

  const {handleDeleteSubtask} = useSubtaskActions()

  const {getAllSubTasks,allSubtasks, task,getTaskById} = useTaskStore();



const {taskId} = useParams();

    useEffect(() => {
   getAllSubTasks(taskId)
  }, [getAllSubTasks,taskId])

  useEffect(() => {
   getTaskById(taskId)
  }, [getTaskById,taskId])

  return (
   <div className=' flex flex-col gap-4 bg-base-300 w-full  h-[540px] overflow-y-scroll ' >

 <div className=' flex justify-between px-8 py-4 m-4' >
    <div className=' flex flex-col gap-2'>
    <h1 className=' font-bold text-3xl' >{task?.title}</h1>
    <p className=' font-light' >{task?.description}</p>
     <p className='text-sm text-gray-400 mt-1'>Assigned to: <span className='font-medium text-white'>John Doe</span></p>
    </div>
    <div className=' flex items-center gap-2'>
         {/* <UpdateTask/> */}
        <div className="badge badge-success">{task?.status}</div>
        
    </div>
   </div>


<div className=' flex flex-col border-2 mx-4 my-4 border-white   ' >
<div className=' p-2 flex items-center justify-between mx-4  '>
        <div>
    <h2 className=' font-bold text-2xl'>Subtask</h2>
        </div>
        <div>
   <SubtaskModal taskId={taskId} />
        </div>
    </div>

    {
      allSubtasks.map((subtask)=>(
           <SubTaskBar
              key={subtask._id}
              subtask={subtask}
              content={subtask.title}
            onDelete={(subTaskId) => handleDeleteSubtask(subTaskId, taskId)}
              
              />
      ))
    }

 </div>

    </div>
  )
}

export default Task