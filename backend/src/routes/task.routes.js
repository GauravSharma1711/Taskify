import express from 'express'
import { createSubTask, createTask, deleteSubTask, deleteTask, getTasks, updateSubTask, updateTask } from '../controllers/task.controller.js'
import {protectRoute} from '../middlewares/auth.middleware.js'

const router = express.Router()

 router.get('/:projectId',protectRoute,getTasks);
 router.get('/:taskId',protectRoute,getTasks);
 router.post('/create',protectRoute,createTask);
 router.put('/:taskId',protectRoute,updateTask);
 router.delete('/:taskId',protectRoute,deleteTask);

 router.post('/:taskId',protectRoute,createSubTask);
 router.put('/:subTaskId',protectRoute,updateSubTask);
router.delete('/:subTaskId',protectRoute,deleteSubTask);

export default router