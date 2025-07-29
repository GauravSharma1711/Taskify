import express from 'express'
import { createSubTask,getAllSubtasks ,createTask, deleteSubTask, deleteTask, getTaskById, getTasks, updateSubTask, updateTask } from '../controllers/task.controller.js'
import {protectRoute} from '../middlewares/auth.middleware.js'

const router = express.Router()

router.post('/:projectId/n/:assignedTo',protectRoute,createTask);
router.put('/:taskId',protectRoute,updateTask);
 router.get('/:projectId',protectRoute,getTasks);
 router.get('/n/:taskId',protectRoute,getTaskById);
 router.delete('/:taskId',protectRoute,deleteTask);


 router.post('/:taskId',protectRoute,createSubTask);
 router.put('/n/:subTaskId',protectRoute,updateSubTask);
router.delete('/n/:subTaskId',protectRoute,deleteSubTask);
router.get('/s/:taskId',protectRoute,getAllSubtasks);

export default router