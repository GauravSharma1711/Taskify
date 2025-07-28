import express from 'express'
import { addMemberToProject, createProject, deleteMember, deleteProject, getProjectById, getProjectMembers, getProjects, getProjectsByMe, updateMemberRole, updateProject } from '../controllers/project.controller.js'
import {protectRoute} from '../middlewares/auth.middleware.js'

const router = express.Router()

router.get('/me',protectRoute,getProjectsByMe);
router.get('/all',protectRoute,getProjects);

router.get('/:projectId',protectRoute,getProjectById);

router.post('/create',protectRoute,createProject);
router.put('/:projectId',protectRoute,updateProject);
router.delete('/:projectId',protectRoute,deleteProject);


router.get('/:projectId/n/:memberId',protectRoute,getProjectMembers);
router.post('/:projectId/n/:memberId',protectRoute,addMemberToProject);
router.put('/:projectId/n/:memberId',protectRoute,updateMemberRole);
router.delete('/:projectId/n/:memberId',protectRoute,deleteMember);


export default router