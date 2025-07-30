import {Task} from '../models/task.model.js'
import {User} from '../models/user.model.js'
import {Project} from '../models/project.model.js'
import { Subtask } from '../models/subtask.model.js';

// get all tasks
const getTasks = async (req, res) => {
  
 try {
   const userId = req.user.id;
   const user = await User.findById(userId);
 
    const projectId = req.params.projectId;
    const project = await Project.findById(projectId);
    if(!project){
     return res.status(404).json({error:"Project not found"})
    }
 
    if(project.createdBy!=userId){
     return res.status(403).json({error:"you are not authorized to see tasks of this project"})
    }
 
    const tasks = await Task.find({
       project:project,
       assignedBy:user
    })
 
    if(!tasks){
     return res.status(404).json({error:"no task found"})
    }
 
    return res.status(200).json({tasks});
 
 } catch (error) {
  console.log("error in get all tasks controller",error);
  return res.status(500).json({error:"Internal server error"});
  
 }

};

// get task by id
const getTaskById = async (req, res) => {
 try {
     const userId = req.user.id;

     const taskId = req.params.taskId;
     
     const task = await Task.findById(taskId)
  

     if (task.assignedBy.toString() !== userId && task.assignedTo.toString() !== userId) {
      return res.status(403).json({ error: "Not authorized to view this task" });
    }

   await task.populate([
  { path: "assignedTo", select: "fullName" },
  { path: "assignedBy", select: "fullName" }
]);


     return res.status(200).json({task});


 } catch (error) {
    console.log("error in get task by id controller",error);
  return res.status(500).json({error:"Internal server error"});
 }
};

// create task
const createTask = async (req, res) => {
 
try {
    const {title , description } = req.body;
    const {projectId,assignedTo} = req.params;
    const assignedBy = req.user.id;
  
     const project = await Project.findById(projectId);
      if(!project){
       return res.status(404).json({error:"Project not found"})
      }
  
      if(project.createdBy.toString()!==assignedBy.toString()){
         return res.status(403).json({error:"not authorized to assign task"})
      }
  
      
      const task = new Task({
        title,
        description,
        // attachment:attachment.url,
        assignedTo,
        assignedBy,
       project: projectId
        })
  
        await task.save();
  
        return res.status(200).json({task});
  
} catch (error) {
   console.log("error in create task  controller",error);
  return res.status(500).json({error:"Internal server error"});
}

};

// update task
const updateTask = async (req, res) => {
    
        try {
             const {title,description} = req.body;

             const userId = req.user.id;
             const taskId = req.params.taskId;
             const task = await Task.findById(taskId);
             if(!task){
        return res.status(404).json("task not found");
      }

      if(task.assignedBy.toString()!==userId.toString()){
        return res.status(403).json({error:"you are not authorized to delete task"});
      }

      if(task.title!=="undefined"){
        task.title = title;
      }
      if(task.description!=="undefined"){
        task.description = description;
      }


      await task.save();

      return res.status(200).json({message:"task updated successfully",task});
      

       } catch (error) {
         console.log("error in updateTask controller",error);
         return res.status(500).json({error:"Internal server error"});   
        }

};

// delete task
const deleteTask = async (req, res) => {
  
    try {
      const userId = req.user.id;
      const taskId = req.params.taskId;

      const task = await Task.findById(taskId);
      if(!task){
        return res.status(404).json({error:"task not found"});
      }

      if(task.assignedBy.toString()!==userId.toString()){
        return res.status(403).json({error:"you are not authorized to delete task"});
      }

      await Task.findByIdAndDelete({_id:taskId});

      return res.status(200).json({message:"task deleted successfully"});

    } catch (error) {
       console.log("error in deleteTask controller",error);
      return res.status(500).json({error:"Internal server error"});
    }


};




// create subtask
const createSubTask = async (req, res) => {
  try {
    const {title} = req.body;
    const taskId = req.params.taskId;
    const task = await Task.findById(taskId);
const userId =req.user.id
    const user = await User.findById(userId);

    if(task.assignedBy.toString()!==userId.toString()){
        return res.status(403).json({error:"you are not authorized to assignSubtask"});
      }

      const subTask = new Subtask({
        title,
        task:taskId,
        createdBy:userId
      })

        await subTask.save();

      return res.status(200).json({message:"subtask created",subTask});


  } catch (error) {
    console.log("error in create task  controller",error);
    return res.status(500).json({error:"Internal server error"});
}
  

};

// update subtask
const updateSubTask = async (req, res) => {
    try {
       const subtaskId = req.params.subTaskId;
  
         const curLoggedInUser = req.user.id;
  
      const {title,isCompleted} = req.body;
  
      const subtask = await Subtask.findById(subtaskId);
      if(!subtask){
        return res.status(404).json({error:"subtask not found"});
      }
  
    
      if(subtask.createdBy.toString()!==curLoggedInUser.toString()){
      return res.status(403).json("not authorized to update subtask");
      }
  
      if (title !== undefined) subtask.title = title;
     if (isCompleted !== undefined) subtask.isCompleted = isCompleted;

  
      await subtask.save();
  
      return res.status(200).json({message:"subrask updatedf successfully",subtask})
  
    } catch (error) {
       console.log("error in updatesubTask controller",error);
       return res.status(500).json({error:"Internal server error"}); 
    }
};

// delete subtask
const deleteSubTask = async (req, res) => {
  try {
        const subtaskId = req.params.subTaskId;
  
         const curLoggedInUser = req.user.id;
  
    
  
      const subtask = await Subtask.findById(subtaskId);
      if(!subtask){
        return res.status(404).json({error:"subtask not found"});
      }
  
    
      if(subtask.createdBy.toString()!==curLoggedInUser.toString()){
      return res.status(403).json("not authorized to delete subtask");
      }
  
await Subtask.findByIdAndDelete({_id:subtaskId});

return res.status(200).json({message:"subtask deleted successfully"});

  } catch (error) {
    console.log("error in deleteTask controller",error);
    return res.status(500).json({error:"Internal server error"});
    }
  
};

const getAllSubtasks = async (req,res)=>{
  try {
    
    const taskId = req.params.taskId;

  const allSubTasks = await Subtask.find({ task: taskId });

    if(!allSubTasks){
      return res.status(404).json({message:"no subrtask found"});
    }
    return res.status(200).json({allSubTasks})


  } catch (error) {
     console.log("error in  getAllSubtasks controller",error);
    return res.status(500).json({error:"Internal server error"});
  }
}

export {
  createSubTask,
  createTask,
  deleteSubTask,
  deleteTask,
  getTaskById,
  getTasks,
  updateSubTask,
  updateTask,
  getAllSubtasks
};
