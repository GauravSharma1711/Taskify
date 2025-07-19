import express from 'express'
import { addMemberToProject, createProject, deleteMember, deleteProject, getProjectById, getProjectMembers, getProjects, getProjectsByMe, updateMemberRole, updateProject } from '../controllers/project.controller.js'
import {protectRoute} from '../middlewares/auth.middleware.js'

const router = express.Router()

router.get('/',protectRoute,getProjectsByMe);
router.get('/',protectRoute,getProjects);

router.get('/:projectId',protectRoute,getProjectById);

router.post('/create',protectRoute,createProject);
router.put('/:projectId',protectRoute,updateProject);

router.delete('/:projectId',protectRoute,deleteProject);


router.get('/:projectId/:memberId',protectRoute,getProjectMembers);
router.post('/:projectId',protectRoute,addMemberToProject);
router.put('/:projectId',protectRoute,updateMemberRole);
router.delete('/:projectId/:memberId',protectRoute,deleteMember);


export default router